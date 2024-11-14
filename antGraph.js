class AntGraph {
    constructor(startNode = null) {
        this.nodes = [startNode]
        // this.nodes.append(startNode)
    }

    addNode(node) {
        this.nodes.push(node)
    }

    traverse(nodes = this.nodes) {
        console.log(this.nodes)
        for (const node of nodes) {
            console.log(node.value.length)
            // if(node.links)
            //     for (const link of node.links)
            //         this.traverse(link)

        }
    }
}
module.exports = AntGraph