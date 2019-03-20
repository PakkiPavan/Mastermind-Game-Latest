import React from 'react';
import Matter from 'matter-js';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import scb from './images/scb-1.jpg';
import bird from './images/birdTest.PNG';
import $ from 'jquery';

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

//console.log("OUTSIDE");

class MatterTest extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={}
  }

  componentDidMount()
  {
    console.log("DID MOUNT");
    var engine = Engine.create(),
        world=engine.world;


    var pyramid1 = Composites.pyramid(500, 300, 9, 10, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, 25, 40);
        });
    var pyramid2 = Composites.pyramid(550, 0, 6, 10, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, 25, 40);
        });
    var ground2 = Bodies.rectangle(610, 300, 200, 20, { isStatic: true });

    var rockOptions={
      density: 0.004,
      restitution:0.8,
    },

        rock=Bodies.circle(170,450,20,rockOptions),
        anchor = { x: 170, y: 450 },
        elastic = Constraint.create({
            pointA: anchor,
            bodyB: rock,
            stiffness: 0.05
        });


    World.add(world, [
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


    var runner = Runner.create();
    Runner.run(runner, engine);

    var render;

    render = Render.create({
        element: document.getElementById('bg'),
        engine: engine,
        options:{
          width:800,
          height:630,
          showVelocity:false,
          wireframes:false,
          showIds:true
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
      console.log(world);
      Events.on(engine, 'afterUpdate', function() {
              if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
                  //console.log(rock.position);
                  //rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
                  rock=Bodies.circle(170,450,20,rockOptions);
                  World.add(engine.world, rock);
                  elastic.bodyB = rock;
                  //World.remove(world,world.bodies[5])
                  //World.remove(world,ground2)
                  //console.log(rock.position);
                  //console.log(world.bodies[5].position);
              }
          });

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    })

    Render.run(render);
    //this.setState({})
  }
  componentDidUpdate()
  {
    console.log("DID UPDATE");
    //Render.run(render)
  }
  render()
  {
      return(
        <div>
          <Link to="/"><button className="button">Home</button></Link>
          <div id="bg" style={{position:'absolute',left:'20%'}}>
          </div>
        </div>
      )
  }
}

export default MatterTest;
