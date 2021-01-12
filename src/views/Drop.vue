<template>
  <div class="drop">
    <ul class="btns">
      <li v-for="btn in btnsData" :key="btn" :class="`btn-${btn.id}`">{{btn.value}}</li>
    </ul>
   <div id="content">
    <div id="start" class="item">开始</div>
    <div :id="`node${node.id}`" v-for="node in btnsData" :key="node.id" class="item">{{node.value}}</div>
          <div id="end" class="item">结束</div>
  </div>
  </div>
</template>

<script>
// import drop from '@/tools/drop'
import { jsPlumb } from 'jsplumb'
export default {
  data() {
    return {
      btnsData: [
        {id: 1, value: '信息确认'},
        {id: 2, value: '信息收集'},
        {id: 3, value: '播报话术'},
        {id: 4, value: '表单'},
        {id: 5, value: '合同签署'},
        {id: 6, value: '人脸检测'},
        {id: 7, value: '业务导航'},
        {id: 8, value: '转人工'},
        {id: 9, value: '结束挂断'},
        {id: 10, value: '业务指令'},
      ],
      btnsStyle: {
         isSource: true,
          isTarget: true,
           connector: ['Flowchart', { cornerRadius: 5 }],//连接器使用流程图外观 设置样式
             endpoint: 'Dot',
        paintStyle: {  //通过设置各种 *Style来改变链接或者端点的样式 //连接器外观
          fill: '#579eee',
          //   stroke:'#316b31',
          strokeWidth: 1
        },
         connectorStyle: {
          outlineStroke: '#3fca56',
          strokeWidth: 1
        },
        connectorHoverStyle: {
          strokeWidth: 1,
          outlineStroke: '#3fca56',
        } //连接线选中时的样式
      }
    }
  },
  mounted() {
    let plumbIns = jsPlumb.getInstance()
    let _this = this
      plumbIns.ready(function () {
       plumbIns.addEndpoint('start', { 
        anchors: ['Bottom'], connectorOverlays: [
          ["Arrow", { width: 10, length: 10, location: 0.5, id: "arrow" }],
        ],
      }, _this.btnsStyle)
      _this.btnsData.forEach(element => {
               plumbIns.addEndpoint(`node${element.id}`, {
        anchor: 'Bottom', connectorOverlays: [
          ["Arrow", { width: 10, length: 10, location: 0.5, id: "arrow" }],
        ],
      }, _this.btnsStyle)
       plumbIns.addEndpoint(`node${element.id}`, {
        anchor: 'Top', connectorOverlays: [
          ["Arrow", { width: 10, length: 10, location: 0.5, id: "arrow" }],
        ],
      }, _this.btnsStyle)
      });
       plumbIns.addEndpoint('end', {
        anchor: 'Top', connectorOverlays: [
          ["Arrow", { width: 10, length: 10, location: 0.5, id: "arrow" }],
        ],
      }, _this.btnsStyle)
      //设置节点可拖拽
      // plumbIns.draggable('start') 
      plumbIns.draggable('node1')
      plumbIns.draggable('node2')
      plumbIns.draggable('node3')
      plumbIns.draggable('node4')
      plumbIns.draggable('node5')
      plumbIns.draggable('node6')
      plumbIns.draggable('node7')
      plumbIns.draggable('node8')
      plumbIns.draggable('node9')
      plumbIns.draggable('node10')
      // plumbIns.draggable('end')
      //点击删除连接线
      plumbIns.bind('click', function (conn, originalEvent) {
        plumbIns.deleteConnection(conn); 
      })
      //点击删除dom
      for (let i of document.querySelectorAll('.item')) {
        i.addEventListener("click", function () {
          plumbIns.deleteConnectionsForElement(i.id)
          plumbIns.removeAllEndpoints(i.id);//删除divID所有端点
          //   i.style.display = 'none'
          plumbIns.remove(i.id);//移除节点
        });
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#content {
  margin: 50px;
  position: relative;
  background: #efefef;
  width: 1200px;
  height: 800px;
}
.item {
  border-radius: 4px;
  background-color: #ddddff;
  text-align: center;
  line-height: 40px;
  width: 100px;
  height: 40px;
  position: absolute;
  color: #fff;
}
#start {
  background-color: rgb(245, 79, 28);
  left: 50px;
  top: 50px;
}
#node1 {
  background: #6384fe;
  left: 100px;
  top: 150px;
}
#node2 {
  background: #9586f4;
  right: 100px;
  top: 150px;
}
#node3 {
  background: #579eee;
  left: 300px;
  top: 250px;
}
#node4 {
  background: #74b3b7;
  left: 300px;
  top: 300px;
}
#node5 {
  background: #ffc334;
  left: 300px;
  top: 350px;
}
#node6 {
  background: #3fca56;
  left: 300px;
  top: 400px;
}
#node7 {
   background: #fda04c;
  left: 300px;
  top: 450px;
}
#node8 {
  background: #43add0;
  left: 300px;
  top: 500px;
}
#node9 {
  background: #f56663;
  left: 300px;
  top: 550px;
}
#node10 {
  background: #37d39e;
  left: 300px;
  top: 600px;
}
#end {
  background-color:  rgb(245, 79, 28);
  right: 50px;
  bottom: 50px;
}
.content {
  width: 90%;
  margin: 20px auto;
  height: 600px;
  border: 1px solid #ccc;
}
  .btns {
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    li {
      line-height: 50px;
      margin: 10px;
      width: 40%;
      color: #fff;
      cursor: pointer;
    }
    .btn-1 {    
      background: #6384fe;
      border: 1px solid #5974d5;
    }
    .btn-2 {
      background: #9586f4;
      border: 1px solid #8376d7;
    }
    .btn-3 {
      background: #579eee;
      border: 1px solid #4d8fd9;
    }
    .btn-4 {
      background: #74b3b7;
      border: 1px solid #6a9b9e;
    }
    .btn-5 {
      background: #ffc334;
      border: 1px solid #daa832;
    }
    .btn-6 {
      background: #3fca56;
      border: 1px solid #3ca24d;
    }
    .btn-7 {
      background: #fda04c;
      border: 1px solid #eb9445;
    }
    .btn-8 {
      background: #43add0;
      border: 1px solid #349abc;
    }
    .btn-9 {
      background: #f56663;
      border: 1px solid #e14643;
    }
    .btn-10 {
      background: #37d39e;
      border: 1px solid #37b087;
    }
  }
</style>