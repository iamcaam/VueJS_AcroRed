import Vue from 'vue'
import '../css/reset.css'; 
import '../css/style.css';

new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
        msg: '警告!',
        wrap_div: {
            position: 'absolute',
            width: '590px',
            height: '365px',    
            background: '#00b4f0',
            'border-radius': '3px',
            'box-shadow': '0 1px 2px rgba(0, 0, 0, .1)',
            filter: 'drop-shadow(0 1mm 1mm rgba(0,0,0,0.6))',
            top: '50%',
            left: '50%',
            margin: '-183px 0 0 -295px',
        }        
    },
    /* 局部註冊 (Local Registration) */
    components: {
        'menu-section': {
            template: '<ul><li v-for="item in menuItems">{{ item.text }}</li></ul>',
            data: function() {
                return {
                    menuItems: [{
                        text: 'About me'
                    }, {
                        text: 'Articles'
                    }, {
                        text: 'contact'
                    }]
                }
            }
        },
        'logo': {
            template: '<div v-bind:style="Logo">{{ text }}</div>', // class="Logo"
            data: function() {
                return {
                   text: 'AcroRed',                    
                    Logo: {
                        position: 'relative',
                        float: 'left',
                        'z-index': '3',
                        left: '6px', 
                        top: '0px',
                        width: '180px',
                        height: '70px', 
                        'font-style':'italic',
                        'font-weight':'900',
                        'font-size':'xx-large',
                        color:'red',
                        'text-align':'center',
                        'line-height':'70px',
                        'font-family': 'Times New Roman',
                        'padding-left': '15px',
                        'padding-top': '15px',  
                    }  
                }
            }
        },       
        'warning': {
            //template: '<p v-bind:style="styleObject_warning">{{ text_tw }}</p>',
            template: '<p v-bind:style="styleObject_warning" v-if="lang === \'zh-TW\'">{{ text_tw }}</p>'
                    + '<p v-bind:style="styleObject_warning" v-else-if="lang === \'zh-CN\'">{{ text_cn }}</p>'
                    + '<p v-bind:style="styleObject_warning" v-else>{{ text_us }}</p>',
            data: function() {
                return {
                    lang: navigator.language,
                    text_tw: '警告!',                    
                    text_cn: '警告!',
                    text_us: 'Warning!',                    
                    styleObject_warning: {
                        position: 'absolute',
                        color: 'white',
                        fontSize: (navigator.language === "zh-TW" || navigator.language === "zh-CN" ? '36px' : '40px'),
                        'font-family': '"Times New Roman","DFKai-SB","BiauKai","TW-Kai"',
                        'font-weight': 900,
                        filter: 'drop-shadow(0 1mm 1mm rgba(0,0,0,0.6))',
                        top: '50%',
                        left: '50%',                        
                        margin: (navigator.language === "zh-TW" || navigator.language === "zh-CN" ? '-40px 0 0 -25px' : '-40px 0 0 -75px'),
                    }                    
                }
            }
        },         
        'description-section': {
            // template: '<p v-bind:style="styleObject_desc">{{ text }}</p>',
            template: '<p v-bind:style="styleObject_desc" v-if="lang === \'zh-TW\'">{{ text_tw }}</p>'
                    + '<p v-bind:style="styleObject_desc" v-else-if="lang === \'zh-CN\'">{{ text_cn }}</p>'
                    + '<p v-bind:style="styleObject_desc" v-else>{{ text_us }}</p>',            
            data: function() {
                return {
                    lang: navigator.language,
                    // text: '不能使用central portal之IP進入超融合主機雲管理員頁面!',   
                    text_tw: '不能使用central portal之IP進入超融合主機雲管理員頁面!',                    
                    text_cn: '不能使用central portal之IP进入超融合主机云管理员页面!',
                    text_us: 'It is forbidden to log in to the IP address of the central portal to enter the HCI administrator page!',                                       
                    styleObject_desc: {
                        position: 'absolute',
                        color: 'white',
                        fontSize: '20px',
                        'font-family': '"Times New Roman","DFKai-SB","BiauKai","TW-Kai"',
                        'font-weight': 900,
                        filter: 'drop-shadow(0 1mm 1mm rgba(0,0,0,0.6))',
                        top: '50%',
                        left: '50%',                        
                        margin: (navigator.language === "zh-TW" || navigator.language === "zh-CN" ? '10px 0 0 -250px' : '10px 0 0 -272px'),
                    }                    
                }
            }
        }
    }
})