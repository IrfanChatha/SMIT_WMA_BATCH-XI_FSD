const connectDB = async () => {
    const connectionUrl = process.env.DB_URI;
    mongoose.connect('mongodb+srv://irfanchatha:imchatha@cluster0.iybuyko.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
}


export default connectDB(connectionUrl);