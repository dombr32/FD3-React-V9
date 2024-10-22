import React from 'react';

class DoubleButton extends React.Component {

    cbPressed1 = () => {
        this.props.cbPressed(1)
    }

    cbPressed2 = () => {
        this.props.cbPressed(2)
    }

    render() {

        return (
            <div>
                <input type="button" value={this.props.caption1} onClick={this.cbPressed1}/>
                {this.props.children}
                <input type="button" value={this.props.caption2} onClick={this.cbPressed2}/>
            </div>
        )
    }
}

export default DoubleButton
