module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            User_id: String,
            Jenis_kelamin: String,
            Tanggal_lahir: Date,
            Tempat_lahir: String,
            Alamat: String,
        }, {
            timestamps: true
        }
    )
    return mongoose.model("user", schema);
};