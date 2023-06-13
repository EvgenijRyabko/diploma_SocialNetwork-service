const { main } = require('../database/connection');

const getMessages = async (req, res) => {
  const { source, target } = req.params;
  try {
    if (!source || !target) throw 'Недостаточно параметров!';

    const getUser = async (id) => {
      const user = await main('users').where('id', id).first();
      return user;
    };

    const messages = await main('messages')
      .where({ source_id: source, target_id: target })
      .orWhere({ source_id: target, target_id: source });

    const messagesObj = await Promise.all(
      messages.map(async (el) => {
        const user = await getUser(el.source_id);
        return { ...el, name: user.name, photo: user.profile_img };
      }),
    );

    res.status(200).send(messagesObj);
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const sendMessage = async (req, res) => {
  const { source, target, text } = req.body;
  try {
    if (!source || !target || !text) throw 'Недостаточно параметров!';

    await main('messages').insert({
      source_id: source,
      target_id: target,
      text,
    });

    res.status(200).end();
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Недостаточно параметров!';

    await main('messages').where('id', id).del();

    res.status(200).end();
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const getDialogs = async (req, res) => {
  const { id: userId } = req.params;
  try {
    if (!userId) throw 'Недостаточно параметров!';

    const getLastMessage = async (sourceId, targetId) => {
      const message = await main('messages')
        .select('text', 'created_at')
        .where({ source_id: sourceId, target_id: targetId })
        .orWhere({ source_id: targetId, target_id: sourceId })
        .orderBy('created_at', 'desc')
        .first();

      return message;
    };

    const getUser = async (id) => {
      const user = await main('users').where('id', id).first();
      return user;
    };

    const messages = await main('messages').where('target_id', userId).orWhere('source_id', userId);

    const dialogs = [
      ...new Set(
        messages.map((el) => (el.source_id === parseInt(userId) ? el.target_id : el.source_id)),
      ),
    ];

    const dialogsObj = await Promise.all(
      dialogs.map(async (el) => {
        const message = await getLastMessage(userId, el);
        const user = await getUser(el);
        return { target: el, name: user.name, photo: user.profile_img, ...message };
      }),
    );

    res.status(200).send({ dialogs: dialogsObj });
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const deleteDialog = async (req, res) => {
  const { source, target } = req.body;
  try {
    if (!source || !target) throw 'Недостаточно параметров!';

    const messages = await main('messages')
      .where({ target_id: target, source_id: source })
      .orWhere({ target_id: source, source_id: target });

    for (const el of messages) {
      await main('messages')
        .where({
          source_id: el.source_id,
          target_id: el.target_id,
        })
        .del();
    }

    res.status(200).end();
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getMessages,
  sendMessage,
  deleteMessage,
  getDialogs,
  deleteDialog,
};
