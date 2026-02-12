import { ThreeDots } from 'react-loader-spinner'
import type { LoaderProps } from '../utils/types'
import { memo } from 'react'

const Loader = ({ sizeVal }: LoaderProps) => {
    return (
        <ThreeDots visible={true} height={sizeVal} width={sizeVal} color="#ff1e02" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
    )
}

export default memo(Loader)