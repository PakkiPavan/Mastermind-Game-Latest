import React from 'react';
import Matter from 'matter-js';
import logo from './logo.svg';
import scb from './scb-1.jpg';

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
    world=engine.world;

// create a renderer
// var render = Render.create({
//     element: document.getElementById('bg'),
//     engine: engine
// });

// create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// var ballOptions={
//   isStatic:true,
//   render:{
//     sprite:{
//       texture:logo
//     }
//   }
// }
// var ball=Bodies.rectangle(400,400,50,50,ballOptions)

var pyramid1 = Composites.pyramid(500, 300, 9, 10, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, 25, 40);
    });
var pyramid2 = Composites.pyramid(550, 0, 6, 10, 0, 0, function(x, y) {
        return Bodies.rectangle(x, y, 25, 40);
    });
var ground2 = Bodies.rectangle(610, 300, 200, 20, { isStatic: true });

var rockOptions={density: 0.004,restitution:0.8},
    //rock = Bodies.polygon(170, 450, 8, 20, rockOptions),
    rock=Bodies.circle(170,450,20,rockOptions),
    anchor = { x: 170, y: 450 },
    elastic = Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.05
        // render:{
        //   sprite:{
        //     texture:logo
        //   }
        // }
    });

// add all of the bodies to the world
World.add(world, [
  //falling blocks
  //Bodies.rectangle(200, 100, 80, 80),
  //Bodies.rectangle(400, 100, 80, 80),
  //Bodies.rectangle(600, 100, 80, 80),
  //walls
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  pyramid1,
  pyramid2,
  ground2,
  rock,
  elastic

]);

//Gravity
world.gravity={x:0,y:1}

// run the engine
//Engine.run(engine);
// run the renderer
//Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

var render;

class MatterTest extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={}
  }
  componentDidMount()
  {
    render = Render.create({
        element: document.getElementById('bg'),
        engine: engine,
        options:{
          width:800,
          height:630,
          showVelocity:false,
          wireframes:false
        }
    });
    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
      //World.add(world,document.getElementById('box1'))
      World.add(world,mouseConstraint)
      render.mouse=mouse;

      Events.on(engine, 'afterUpdate', function() {
              if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
                  //rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
                  rock=Bodies.circle(170,450,20,rockOptions);
                  World.add(engine.world, rock);
                  elastic.bodyB = rock;
              }
          });

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
    this.setState({})
  }
  componentDidUpdate()
  {
    console.log("DID UPDATE");
    Render.run(render)
  }

  render()
  {
      return(
        <div>
          <div id="bg" style={{position:'absolute',left:'20%'}}>
          </div>
        </div>
      )
  }
}

export default MatterTest;
