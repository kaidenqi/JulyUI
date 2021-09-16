document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline',
            zoomType:'xy'
        },
        // colors:['lightblue', 'orange', 'pink', 'maroon'],
        tooltip:{
            animation:false,
            backgroundColor:'#333333',
            borderColor:'#f01f11',
            borderRadius:10,
            followPointer:true,
            style:{
                color:'#ffffff'
            },

            formatter(){
                // return `X value - ${this.x}, Y value - ${this.y}`
                let s = `<b>X is:</b>${this.x}`
                this.points.forEach(function(point){
                    s += `<br>Y is:${point.y}`
                });
                return s;
            },
            shared: true
        },
        credits:{
            // enabled:false
            text:"My Custom Credit",
            href:"https://google.com",
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize:'15px',
                color:'red'
            }
        },
        title:{
            text:'Fruits Eaten'
        },
        yAxis:{
            
            title:{
                text:'Individual Eater'
            }
        },
        xAxis : {
            alternateGridColor:'#b7cff7',
            categories: ['Apples', 'Oranges', 'Bananas']
        },
        series:[
            // {
            //     name:"John",
            //     data:[1,100,3,2,2,3,1,2,3]
            // },
            // {
            //     name:"Jane",
            //     data:[111,4,8,15,80, 50,80,5,1]
            // },
            // {
            //     name:"Jill",
            //     data:[2,4,8,4,15,80, 50,10,5,1]
            // },
            // {
            //     name:"James",
            //     data:[2,4,130,15,80, 50,10,5,1]
            // }
            {
                name:'Fruit Consumption',
                negativeColor:'red',
                data:[1,2,3,4,10,-20,2,50,100,200,2,40,30,100,1]
            }
        ]
    })
})