import '../../SCSS/Components/ToolTip/ToolTip.scss'

function ToolTip({ tooltip, children, className, ...params }) {
    return (
        <div tooltip={tooltip} className={className + ' tooltip'} { ...params}>{
            children
        }</div>
    )
}

export default ToolTip