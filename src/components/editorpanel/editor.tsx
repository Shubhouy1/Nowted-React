import Description from '../editorpanel/description'
import Info from '../editorpanel/Info'
import Title from '../editorpanel/TitleHeader'

function Editorpanel(){
    return (
         <div className='h-full overflow-y-auto w-full flex flex-col gap-5'>
        <Title />
        <Info />
        <Description />
       </div>
    )
}
export default Editorpanel