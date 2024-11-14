const cheerio = require('cheerio');
const fs = require('fs').promises;

const AntNode = require('./antNode');
const AntGraph = require("./antGraph");

const loadDoc = async (docs, antGraph = null) => {
    if(!antGraph)
        antGraph = new AntGraph();
    for(const doc of docs){
        try {
            const data = await fs.readFile(doc)

            const $ = cheerio.load(data);
            const customNode = $('.aco-node')
            const newNode = new AntNode(customNode, null)

            antGraph.addNode(newNode)
        }catch (err) {
            console.error(err)
        }
    }
    console.log(antGraph)
}
const antGraph = new AntGraph(new AntNode('aa', null))
loadDoc(['index.html'], antGraph).then(() => {
    antGraph.traverse()
})

// setTimeout(() => {
//     antGraph.traverse()
// }, 2000)

// antGraph.traverse()