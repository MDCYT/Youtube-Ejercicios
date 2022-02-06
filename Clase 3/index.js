const express = require('express');
const app = express();
const axios = require('axios')

const port = 34

app.listen(port, () => {
    console.log("Servidor Iniciado");
})

app.get("/", async (req, res) => {

    let r = await axios.get('https://some-random-api.ml/animal/dog')
    r = r.data.image

    res.send(`
        <h1>Servidor Express</h1>
        <h2>Porta: ${port}</h2>
        <p>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ligula ut libero iaculis, sed dignissim felis iaculis. Quisque sagittis, justo vel lacinia tincidunt, leo quam feugiat nunc, a placerat orci nibh nec massa. Sed posuere, leo eu auctor lobortis, purus nibh condimentum odio, id tempor eros urna non urna. In suscipit dui quis turpis feugiat, ut euismod neque malesuada. Proin lectus justo, finibus in vehicula et, vulputate sed ex. Etiam odio quam, vulputate maximus gravida suscipit, auctor eu tortor. Aliquam erat volutpat. Suspendisse nec risus justo. Sed lobortis arcu eu dolor ornare, vitae sollicitudin dolor ornare.
        
        Ut sed tellus ac nisl gravida viverra et vel neque. Etiam et lectus id metus mollis semper. Nullam ac lacus condimentum, sollicitudin quam vitae, accumsan ipsum. Sed accumsan augue ac nunc maximus tristique. Sed arcu odio, pharetra id egestas vel, commodo facilisis augue. Vestibulum finibus imperdiet tortor eu placerat. Aenean blandit felis ac mollis aliquam. Sed sit amet convallis ante. Praesent non mi sed metus auctor porta at eget metus. Nullam efficitur eget nisi sed finibus. Sed nec urna sed massa suscipit aliquet. Etiam quis commodo sem. Mauris vel viverra lacus, sed iaculis magna.
        
        Aliquam erat volutpat. Nunc iaculis odio vitae purus efficitur hendrerit. Sed in quam orci. Aenean bibendum dignissim tortor, non dictum ligula commodo in. Nulla ut erat eget neque vulputate tempus eu id felis. Curabitur accumsan venenatis sem sed elementum. Mauris eget fringilla metus, id pharetra quam. Nam a quam interdum elit elementum feugiat. Sed in quam mi. Donec in mauris quis velit mollis scelerisque ut non erat. Etiam nec dolor efficitur, porta lectus aliquet, molestie massa. Praesent malesuada justo in felis sodales imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Suspendisse luctus fringilla neque nec euismod. Etiam sagittis mauris quis elit consectetur tincidunt. Suspendisse potenti. Donec ac eros placerat, tincidunt dui quis, mattis sapien. Morbi tincidunt diam id arcu maximus eleifend. Duis vitae diam metus. Sed consectetur est dolor. In convallis arcu vitae augue rhoncus feugiat quis a odio.
        
        Donec non quam nulla. Aenean neque magna, pulvinar sit amet eros in, elementum viverra est. In eget rutrum lacus. Maecenas pulvinar libero at sodales molestie. Sed vulputate eget libero at venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus augue. Proin varius vestibulum nulla eget tincidunt. Vestibulum quis fermentum tortor. Integer eu sollicitudin sem. Vestibulum vel quam nec tellus vehicula malesuada. Duis tempus libero est, ac vehicula tellus finibus at. Sed tempor lacinia elementum. Aliquam in placerat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus luctus lobortis.</p>

        <img src="${r}" alt="">
        `);
})

app.get("/dog", async (req, res) => {

    let r = await axios.get('https://some-random-api.ml/animal/dog')
    r = r.data.image

    res.send(`
        <img src="${r}" alt="">
        `);
})

// Error 404
app.use((req, res, next) => {
    res.status(300).redirect("/")
})