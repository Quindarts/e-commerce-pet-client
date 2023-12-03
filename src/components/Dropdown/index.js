import { Icon } from '@iconify/react'
import { Fragment } from 'react'

const Dropdown = (props) => {
    const { options, onChange, ...restProps } = props
    const defaultOption = options.find((item) => item?.defaultValue === true)
    const defaultValue = defaultOption ? defaultOption.value : ''

    return (
        <Fragment>
            <div className="selector">
                <select
                    defaultValue={defaultValue}
                    onChange={onChange}
                    {...restProps}      
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <Icon icon="fa6-solid:angle-down" />
            </div>
        </Fragment>
    )
}
export default Dropdown
