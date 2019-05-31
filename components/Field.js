export default (props) => (
  <div className='field' style={{ ...props.style }}>
    <label htmlFor={props.name}>
      {props.name.toUpperCase()}
    </label>
    { props.children }
    <div className='description'>
      {props.description}
    </div>
    <style jsx>
      {`
        .field {
          margin-bottom: 30px;
          border-bottom: 2px solid #d8d8d8;
          width: 100%;
        }
        .field:focus-within, .field:focus {
          border-bottom: 2px solid #F47F97 !important;
        }
        label {
          margin-right: 2px;
          display: inline-block;
          font-size: 12px;
          font-weight: bold;
        }
        .description {
          float: left;
          font-size: 11px;
          font-style: italic;
          color: #6b6b6b;
        }
      `}
    </style>
  </div>
)
