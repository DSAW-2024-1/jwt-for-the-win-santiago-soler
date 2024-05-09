function contacts(req, res) {
    const contacts = ['Amin', 'Jorge', 'Marta', 'Elena'];
    res.status(200).json(contacts); 
}
module.exports = {contacts};