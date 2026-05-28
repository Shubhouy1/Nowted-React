import Notecard from "./notecard"
function FolderList (){
    return (
        <div className='flex flex-col bg-(--folder-section) h-full gap-5'>
        <div className='pt-5 pl-5'>
          <p className="text-[22px] font-semibold leading-none text-white">Personal</p>
        </div >
        <div className="px-5 flex flex-col gap-4">
         <Notecard
          title="My Goals for the Next Year"
          date="31/12/2022"
          preview="As the year comes to a ..."
        />

        <Notecard
          title="Reflection on the Month of June"
          date="21/06/2022"
          preview="It's hard to believe that ..."
        />

        <Notecard
          title="My Favorite Memories from Childhood"
          date="11/04/2022"
          preview="I was reminiscing about ..."
        />

        <Notecard
          title="Reflections on My First Year of College"
          date="08/04/2022"
          preview="It's hard to believe that ..."
        />

        <Notecard
          title="My Experience with Meditation"
          date="24/03/2022"
          preview="I've been trying to ..."
        />

        <Notecard
          title="Thoughts on the Pandemic"
          date="01/02/2021"
          preview="It's hard to believe that ..."
        />

        <Notecard
          title="My Favorite Recipes"
          date="08/01/2021"
          preview="I love cooking and trying ..."
        />
        </div>
       </div>
    )
}

export default FolderList