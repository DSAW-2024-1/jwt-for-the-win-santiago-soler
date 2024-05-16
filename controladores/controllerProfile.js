function perfil(req, res) {
    const dataProfile = {
        firstName: 'Amin',
        lastName: 'Bouzaine',
        email: 'amin@gmail.com',
        date: '2021-10-10',
}
res.status(200).json(dataProfile);
}
module.exports = {perfil};