let express =require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();

let categoryRouter = express('./src/controller/CategoryRouter');
let productRouter = express('./src/controller/ProductRouter');

let port =process.env.PORT || 6700;
   
//default
app.get('/',(req,res) =>{
    res.send('Hii From Express')
})


app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,(err) =>{
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`)
    }
});