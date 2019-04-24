import React, {Component} from 'react';

import classes from './Modal.module.scss'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -130vh)',
                         opacity: this.props.show ? '1' : '0',
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;