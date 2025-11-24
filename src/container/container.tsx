type Props = {
    children: React.ReactNode
}

export const Container = ({ children }: Props) => {
    return (
        <div className='md:px-2 py-0 mx-auto my-0 max-w-[1440px]'>
            {children}
        </div>
    )
}