import React, { Component } from 'react';
import { Insta, Instaimg, Facebook, Fbimg, Twitter, Twitimg, Instatxt, Fbtxt, Twittxt } from './style.js';

class Body extends Component {
    render() {
        return (
                <div width="100%">
                    <Insta width="200px">Instagram
                    <Instaimg>
                    <img src={require('./Insta.png')} height="200" width="200"/>
                    </Instaimg>
                    <Instatxt>
                    <div class="button-wrapper">
                        <a class="button cta-button" href="https://www.instagram.com">Click Here</a>
                        </div>
                    </Instatxt>
                    </Insta>
                    
                    <Facebook width="200px">Facebook
                    <Fbimg>
                    <img src={require('./Fb.png')} height="200" width="200"/>
                    </Fbimg>
                    <Fbtxt>
                    <div class="button-wrapper">
                        <a class="button cta-button" href="https://www.facebook.com">Click Here</a>
                        </div>
                    </Fbtxt>
                    </Facebook>

                    <Twitter width="200px">Twitter 
                    <Twitimg>
                    <img src={require('./Twitter.png')} height="200" width="200"/>
                    </Twitimg>
                    <Twittxt>
                    <div class="button-wrapper">
                        <a class="button cta-button" href="https://www.twitter.com">Click Here</a>
                        </div>
                    </Twittxt>
                    </Twitter>  

                            
                </div>
                   
           
        );
    }
}


export default Body;