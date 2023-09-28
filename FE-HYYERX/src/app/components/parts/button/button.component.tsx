import { css } from "@emotion/react"

const ButtonComponent= () => {
  return (
    <button css={cssButton}>Add to Cart</button>
  )
}

export default ButtonComponent

const cssButton = css`
text-decoration: none;
    display: inline-block;
    border: 1px solid #fff;
    padding:5px 0px;
    color: #fff;
    background:#595959;
    width:140px;
    border: 3px solid #595959;
:hover{
    background:#fff;
    color: #595959;
    border: 3px solid #595959;
}
`