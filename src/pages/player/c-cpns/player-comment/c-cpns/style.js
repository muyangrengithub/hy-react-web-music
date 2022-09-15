import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    overflow: hidden;
    .comment_img{
        float: left;
        width: 50px;
        height: 50px;
        margin-right: -100px;
    }
    .comment_content{
        margin-left: 60px;
        a{
            color:#0c73c2
        }
        div:nth-of-type(2){
            margin-top: 15px;
            text-align: right;
            .time{
                color: #999;
                float: left;
            }
            .like{
                height: 15px;
               
                a{
                    padding-top: 2px;
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    background: url(${require('@/assets/img/sprite_icon3.png')}) no-repeat -150px 0;
                }
                span{
                    position: relative;
                    bottom: 3px;
                }
            }
        }
    }
`