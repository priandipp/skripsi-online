import React, { Component } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import loadImage from 'image-promise';
import Konva from 'konva';

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      points: [],
      lines: [],
      line: null,
      pen: false,
      onMouseDown: false
    };
  }

  componentDidMount() {
    loadImage(
      // img
      'http://underthebridge.co.uk/wp-content/uploads/2014/03/Example-main-image1.jpg'
    ).then(image => {
      // image.width = window.innerWidth;
      // image.height = window.innerHeight;
      this.setState({
        image
      });
    });
  }

  drawLine(points, stage) {
    const { editableLayer } = this.refs;

    const line = new Konva.Line({
      points,
      stroke: '#45cc34',
      strokeWidth: 12,
      lineCap: 'round',
      lineJoin: 'round',
      draggable: true
    });

    editableLayer.add(line);
    stage.add(editableLayer);
    return line;
  }

  stageOnMouseUp = () => {
    const { editableLayer } = this.refs;
    const { lines, line, pen } = this.state;

    if (pen) {
      lines.push(line);
      editableLayer.destroyChildren();
      for (const index in lines) {
        editableLayer.add(lines[index]);
      }
    }

    this.setState({
      points: [],
      onMouseDown: false
    });
  };

  stageOnMouseDown = () => {
    this.setState({
      onMouseDown: true
    });
  };

  stageOnMouseMove = e => {
    const { onMouseDown, pen } = this.state;
    if (pen && onMouseDown) {
      // ambil posisi mouse
      const { offsetX, offsetY } = e.evt;
      // masukkan ke state points untuk penggambaran line
      const points = [...this.state.points, offsetX, offsetY];
      const line = this.drawLine(points, e.currentTarget);

      this.setState({
        line,
        points
      });
    }
  };

  penButtonClicked = () => {
    const { penButton } = this.refs;
    penButton.classList.toggle('is-info');
    this.setState({
      pen: !this.state.pen
    });
  };

  render() {
    return (
      <div>
        <Stage
          height={window.innerHeight}
          width={window.innerWidth}
          onMouseUp={this.stageOnMouseUp}
          onMouseDown={this.stageOnMouseDown}
          onMouseMove={this.stageOnMouseMove}
        >
          <Layer>
            <KonvaImage ref="image" image={this.state.image} />
          </Layer>
          <Layer ref="editableLayer" onDragStart={e => console.log(e)} />
        </Stage>
        <div className="columns">
          <div className="column">
            <button
              ref="penButton"
              className="button"
              onClick={this.penButtonClicked}
            >
              Pen
            </button>
          </div>
        </div>
      </div>
    );
  }
}
