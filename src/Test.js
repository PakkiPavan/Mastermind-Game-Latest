import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import 'babel-polyfill';
import $ from 'jquery';

class Simulator extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={cursor:'',components:''}
  }
  componentDidMount()
  {
    fetch('conf/components.json')
    .then(res=>res.json())
    .then(data=>{
      this.setState({components:data},()=>console.log(this.state.components))
    })
    .catch(err=>console.log("ERROR"))
    // $.ajax({
    //   url:'conf/components.json',
    //   success:function(data)
    //   {
    //     console.log(data)
    //     this.setState({components:''})
    //   },
    //   error:function()
    //   {
    //     alert("Something went wrong")
    //   }
    // })

  }
  changeCursor(e)
  {
    this.setState({cursor:document.getElementById(e.target.id).innerText})
  }
  place(e)
  {
    document.getElementById(e.target.id).innerText=this.state.cursor;
  }
  generate()
  {
    document.getElementById('code').innerText=""
    document.getElementById('code').innerHTML='<h1>React Code</h1>'

    for(var i=0;i<document.getElementById('pane2').childNodes.length;i++)
    {
      if(document.getElementById('pane2').childNodes[i].innerText!=="")
      {
        console.log(document.getElementById('pane2').childNodes[i].innerText)
        var s=document.getElementById('pane2').childNodes[i].innerText
        //document.getElementById('code').innerHTML+=this.state.components[s];
        document.getElementById('code').innerText+=this.state.components[s];
        document.getElementById('splitpane').style.opacity='0.5'
        $("#code").show()
      }
    }
  }
  render()
  {
    return(
      <div>
        <div id="code">
        </div>
        <div id="splitpane">
          <SplitPane minSize={200}>
            <div id="pane1">
              <div id="header" className="p1" onClick={this.changeCursor.bind(this)}>Header</div>
              <div id="footer" className="p1" onClick={this.changeCursor.bind(this)}>Footer</div>
              <div id="button" className="p1" onClick={this.changeCursor.bind(this)}>Button</div>
              <div id="inputbox" className="p1" onClick={this.changeCursor.bind(this)}>Inputbox</div>
              <div id="dropdown" className="p1" onClick={this.changeCursor.bind(this)}>Dropdown</div>
              <button onClick={this.generate.bind(this)}>Generate Code</button>
            </div>
            <div id="pane2">
              <div id="1" className="p2" onClick={this.place.bind(this)}></div>
              <div id="2" className="p2" onClick={this.place.bind(this)}></div>
              <div id="3" className="p2" onClick={this.place.bind(this)}></div>
              <div id="4" className="p2" onClick={this.place.bind(this)}></div>
              <div id="5" className="p2" onClick={this.place.bind(this)}></div>
              <div id="6" className="p2" onClick={this.place.bind(this)}></div>
              <div id="7" className="p2" onClick={this.place.bind(this)}></div>
              <div id="8" className="p2" onClick={this.place.bind(this)}></div>
              <div id="9" className="p2" onClick={this.place.bind(this)}></div>
              <div id="10" className="p2" onClick={this.place.bind(this)}></div>
              <div id="11" className="p2" onClick={this.place.bind(this)}></div>
              <div id="12" className="p2" onClick={this.place.bind(this)}></div>
              <div id="13" className="p2" onClick={this.place.bind(this)}></div>
              <div id="14" className="p2" onClick={this.place.bind(this)}></div>
              <div id="15" className="p2" onClick={this.place.bind(this)}></div>
              <div id="16" className="p2" onClick={this.place.bind(this)}></div>
              <div id="17" className="p2" onClick={this.place.bind(this)}></div>
              <div id="18" className="p2" onClick={this.place.bind(this)}></div>
              <div id="19" className="p2" onClick={this.place.bind(this)}></div>
              <div id="20" className="p2" onClick={this.place.bind(this)}></div>
              <div id="21" className="p2" onClick={this.place.bind(this)}></div>
              <div id="22" className="p2" onClick={this.place.bind(this)}></div>
              <div id="23" className="p2" onClick={this.place.bind(this)}></div>
              <div id="24" className="p2" onClick={this.place.bind(this)}></div>
              <div id="25" className="p2" onClick={this.place.bind(this)}></div>
              <div id="26" className="p2" onClick={this.place.bind(this)}></div>
              <div id="27" className="p2" onClick={this.place.bind(this)}></div>
              <div id="28" className="p2" onClick={this.place.bind(this)}></div>
              <div id="29" className="p2" onClick={this.place.bind(this)}></div>
              <div id="30" className="p2" onClick={this.place.bind(this)}></div>
              <div id="31" className="p2" onClick={this.place.bind(this)}></div>
              <div id="32" className="p2" onClick={this.place.bind(this)}></div>
              <div id="33" className="p2" onClick={this.place.bind(this)}></div>
              <div id="34" className="p2" onClick={this.place.bind(this)}></div>
              <div id="35" className="p2" onClick={this.place.bind(this)}></div>
              <div id="36" className="p2" onClick={this.place.bind(this)}></div>
              <div id="37" className="p2" onClick={this.place.bind(this)}></div>
              <div id="38" className="p2" onClick={this.place.bind(this)}></div>
              <div id="39" className="p2" onClick={this.place.bind(this)}></div>
              <div id="40" className="p2" onClick={this.place.bind(this)}></div>
              <div id="41" className="p2" onClick={this.place.bind(this)}></div>
              <div id="42" className="p2" onClick={this.place.bind(this)}></div>
              <div id="43" className="p2" onClick={this.place.bind(this)}></div>
              <div id="44" className="p2" onClick={this.place.bind(this)}></div>
              <div id="45" className="p2" onClick={this.place.bind(this)}></div>
              <div id="46" className="p2" onClick={this.place.bind(this)}></div>
              <div id="47" className="p2" onClick={this.place.bind(this)}></div>
              <div id="48" className="p2" onClick={this.place.bind(this)}></div>
              <div id="49" className="p2" onClick={this.place.bind(this)}></div>
              <div id="50" className="p2" onClick={this.place.bind(this)}></div>
              <div id="51" className="p2" onClick={this.place.bind(this)}></div>
              <div id="52" className="p2" onClick={this.place.bind(this)}></div>
              <div id="53" className="p2" onClick={this.place.bind(this)}></div>
              <div id="54" className="p2" onClick={this.place.bind(this)}></div>
              <div id="55" className="p2" onClick={this.place.bind(this)}></div>
              <div id="56" className="p2" onClick={this.place.bind(this)}></div>
              <div id="57" className="p2" onClick={this.place.bind(this)}></div>
              <div id="58" className="p2" onClick={this.place.bind(this)}></div>
              <div id="59" className="p2" onClick={this.place.bind(this)}></div>
              <div id="60" className="p2" onClick={this.place.bind(this)}></div>
              <div id="61" className="p2" onClick={this.place.bind(this)}></div>
              <div id="62" className="p2" onClick={this.place.bind(this)}></div>
              <div id="63" className="p2" onClick={this.place.bind(this)}></div>
              <div id="64" className="p2" onClick={this.place.bind(this)}></div>
              <div id="65" className="p2" onClick={this.place.bind(this)}></div>
              <div id="66" className="p2" onClick={this.place.bind(this)}></div>
              <div id="67" className="p2" onClick={this.place.bind(this)}></div>
              <div id="68" className="p2" onClick={this.place.bind(this)}></div>
              <div id="69" className="p2" onClick={this.place.bind(this)}></div>
              <div id="70" className="p2" onClick={this.place.bind(this)}></div>
              <div id="71" className="p2" onClick={this.place.bind(this)}></div>
              <div id="72" className="p2" onClick={this.place.bind(this)}></div>
              <div id="73" className="p2" onClick={this.place.bind(this)}></div>
              <div id="74" className="p2" onClick={this.place.bind(this)}></div>
              <div id="75" className="p2" onClick={this.place.bind(this)}></div>
              <div id="76" className="p2" onClick={this.place.bind(this)}></div>
              <div id="77" className="p2" onClick={this.place.bind(this)}></div>
              <div id="78" className="p2" onClick={this.place.bind(this)}></div>
              <div id="79" className="p2" onClick={this.place.bind(this)}></div>
              <div id="80" className="p2" onClick={this.place.bind(this)}></div>
              <div id="81" className="p2" onClick={this.place.bind(this)}></div>
              <div id="82" className="p2" onClick={this.place.bind(this)}></div>
              <div id="83" className="p2" onClick={this.place.bind(this)}></div>
              <div id="84" className="p2" onClick={this.place.bind(this)}></div>
              <div id="85" className="p2" onClick={this.place.bind(this)}></div>
              <div id="86" className="p2" onClick={this.place.bind(this)}></div>
              <div id="87" className="p2" onClick={this.place.bind(this)}></div>
              <div id="88" className="p2" onClick={this.place.bind(this)}></div>
              <div id="89" className="p2" onClick={this.place.bind(this)}></div>
              <div id="90" className="p2" onClick={this.place.bind(this)}></div>
              <div id="91" className="p2" onClick={this.place.bind(this)}></div>
              <div id="92" className="p2" onClick={this.place.bind(this)}></div>
              <div id="93" className="p2" onClick={this.place.bind(this)}></div>
              <div id="94" className="p2" onClick={this.place.bind(this)}></div>
              <div id="95" className="p2" onClick={this.place.bind(this)}></div>
              <div id="96" className="p2" onClick={this.place.bind(this)}></div>
              <div id="97" className="p2" onClick={this.place.bind(this)}></div>
              <div id="98" className="p2" onClick={this.place.bind(this)}></div>
              <div id="99" className="p2" onClick={this.place.bind(this)}></div>
              <div id="100" className="p2" onClick={this.place.bind(this)}></div>
              <div id="101" className="p2" onClick={this.place.bind(this)}></div>
              <div id="102" className="p2" onClick={this.place.bind(this)}></div>
              <div id="103" className="p2" onClick={this.place.bind(this)}></div>
              <div id="104" className="p2" onClick={this.place.bind(this)}></div>
              <div id="105" className="p2" onClick={this.place.bind(this)}></div>
              <div id="106" className="p2" onClick={this.place.bind(this)}></div>
              <div id="107" className="p2" onClick={this.place.bind(this)}></div>
              <div id="108" className="p2" onClick={this.place.bind(this)}></div>
              <div id="109" className="p2" onClick={this.place.bind(this)}></div>
              <div id="110" className="p2" onClick={this.place.bind(this)}></div>
              <div id="111" className="p2" onClick={this.place.bind(this)}></div>
              <div id="112" className="p2" onClick={this.place.bind(this)}></div>
              <div id="113" className="p2" onClick={this.place.bind(this)}></div>
              <div id="114" className="p2" onClick={this.place.bind(this)}></div>
              <div id="115" className="p2" onClick={this.place.bind(this)}></div>
              <div id="116" className="p2" onClick={this.place.bind(this)}></div>
              <div id="117" className="p2" onClick={this.place.bind(this)}></div>
              <div id="118" className="p2" onClick={this.place.bind(this)}></div>
              <div id="119" className="p2" onClick={this.place.bind(this)}></div>
              <div id="120" className="p2" onClick={this.place.bind(this)}></div>
            </div>
          </SplitPane>
        </div>
      </div>
    )
  }
}

export default Simulator;
