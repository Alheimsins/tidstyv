import Heading from './Heading'

export default (props) => (
  <div style={props.style} className='card'>
    <Heading>{props.name}</Heading>
    {props.children}
    <style jsx>
      {`
        .card {
          background-color: #FAFAFA;
          border: 1px solid #F2F2F3;
          padding: 10px;
          box-shadow: 0 5px 3px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.06);
        }
      `}
    </style>
  </div>
)
