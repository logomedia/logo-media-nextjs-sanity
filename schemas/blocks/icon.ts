import { defineType, defineField } from "sanity";


export default defineType({

    title: 'Icons',
    name: 'icon',
    type: 'object',
    fields:[
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
          }),
        defineField({
            title: 'Icon',
            name:'icon',
            type: 'image',
            }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'icon',          
        },
        prepare({ title, media }) {
            return {
                title,
                media
            }
        }
      }
    
})