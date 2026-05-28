import menuIcon from '../../assets/Frame 1.svg'
function Title(){
    return (
        <div className='flex  justify-between h-auto w- ull px-7 pt-7'>
          <p className='text-white font-semibold text-2xl'>Reflection on the Month of June</p>
          <img className='h-7 w-7 pt-1' src={menuIcon} />
        </div>
    )
}

export default Title