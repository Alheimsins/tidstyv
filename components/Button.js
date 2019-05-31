export default (props) => {
  const propTypes = {
    onClick: props.onClick,
    disabled: props.disabled,
    value: props.value,
    type: props.type || 'button',
    name: props.name,
    autoFocus: props.autoFocus
  }

  return (
    <p>
      <input {...propTypes} />
      <style jsx>
        {`
          input {
            width: ${props.width || '120px'};
            height: ${props.height || '40px'};
            border: ${props.border || '0px solid black'};
            font-size: ${props.fontSize || '12px'};
            text-transform: uppercase;
            transition: all 200ms;
            color: ${props.color || 'white'};
            background: ${props.background || '#F47F97;'};
            border-radius: 5px;
            cursor: pointer;
            -webkit-appearance: none;
            box-shadow: 0 5px 3px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.06);
          }
          input:disabled {
            background: #eaeaea;
            color: #cccccc;
            border-color: white;
          }
        `}
      </style>
    </p>
  )
}
