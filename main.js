import React from 'react';
import {render} from 'react-dom';
import Likebutton from './likebutton';



render(<Likebutton count={0} text="likes" />, document.getElementById('app'));