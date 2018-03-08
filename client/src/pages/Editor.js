import React, { Component } from 'react';
import { Stage, Layer, Image as KonvaImage, Line } from 'react-konva';
import loadImage from 'image-promise';

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      imageScale: { x: 1, y: 1 },
      imagePosition: {
        x: 0,
        y: 0
      },
      points: [],
      pen: false,
      onMouseDown: false,
      stackOfPoints: []
    };
  }

  componentDidMount() {
    loadImage(
      'https://andriyudhistira.files.wordpress.com/2011/05/tugas-3-bahasa-indonesia_3.png'
      // 'https://www.planwallpaper.com/static/images/HD-Wallpapers1_FOSmVKg.jpeg'
    ).then(image => {
      const windowHeight = window.innerHeight - 60;
      const scale = windowHeight / image.height;
      image.height = windowHeight;
      image.width = window.innerWidth * scale;

      this.setState({
        image
      });
    });
  }

  stageOnMouseUp = () => {
    const { points } = this.state;

    let { stackOfPoints } = this.state;

    stackOfPoints = [...stackOfPoints, points];

    this.setState({
      points: [],
      onMouseDown: false,
      stackOfPoints
    });
  };

  stageOnMouseDown = () => {
    this.setState({
      onMouseDown: true
    });
  };

  stageOnMouseMove = e => {
    const { onMouseDown, pen, imageScale, imagePosition } = this.state;
    // ambil posisi mouse
    const { offsetX, offsetY } = e.evt;

    if (pen && onMouseDown) {
      // masukkan ke state points untuk penggambaran line
      const points = [
        ...this.state.points,
        (offsetX + -imagePosition.x) / imageScale.x,
        (offsetY + -imagePosition.y) / imageScale.y
      ];

      this.setState({
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

  zoomInButtonClicked = () => {
    let { imageScale } = this.state;

    imageScale = {
      x: imageScale.x + 0.25,
      y: imageScale.y + 0.25
    };

    this.setState({
      imageScale
    });
  };

  zoomOutButtonClicked = () => {
    let { imageScale } = this.state;

    imageScale = {
      x: imageScale.x - 0.25,
      y: imageScale.y - 0.25
    };

    this.setState({
      imageScale
    });
  };

  render() {
    return (
      <div>
        <Stage
          height={window.innerHeight - 60}
          width={window.innerWidth}
          onMouseUp={this.stageOnMouseUp}
          onMouseDown={this.stageOnMouseDown}
          onMouseMove={this.stageOnMouseMove}
        >
          <Layer>
            <KonvaImage
              scale={this.state.imageScale}
              ref="image"
              image={this.state.image}
              draggable={!this.state.pen}
              onDragMove={e => {
                const { x, y } = e.target.attrs;

                this.setState({
                  imagePosition: {
                    x,
                    y
                  }
                });
              }}
              stroke="red"
              strokeWidth={12}
            />
          </Layer>
          <Layer
            x={this.state.imagePosition.x}
            y={this.state.imagePosition.y}
            scale={this.state.imageScale}
            stroke="blue"
            strokeWidth={5}
          >
            {this.state.stackOfPoints.map((points, index) => (
              <Line
                points={points}
                key={index}
                stroke="red"
                strokeWidth={5}
                draggable
              />
            ))}
            <Line points={this.state.points} stroke="red" strokeWidth={5} />
          </Layer>
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
            <button className="button" onClick={this.zoomInButtonClicked}>
              Zoom In
            </button>
            <button className="button" onClick={this.zoomOutButtonClicked}>
              Zoom Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}
