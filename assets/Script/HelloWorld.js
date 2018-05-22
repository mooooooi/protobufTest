var protobuf = require('protobuf')
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        protos: {
            default: [],
            type: cc.TextAsset
        } 
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.pRoot = new protobuf.Root()
        for(let proto of this.protos){
            if (proto.text.charAt(0) === "{")
                source = JSON.parse(source);
            protobuf.parse(proto.text,this.pRoot)
        }
        var enu = this.pRoot.lookupType('grace.proto.msg.Player')
        cc.log(this.pRoot)
        var data ={
            id: '001',
            name: '123',
        }
        var message = enu.create(data)
        cc.log(enu.encode(message).finish())

    },
    // called every frame
    update: function (dt) {

    },
});
