function form(req, res) {
    const{ text } = req.body;
    res.status(200).json({message: 'Formulario de contacto'});
}
module.exports = {form};