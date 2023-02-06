import { defineType, defineField } from "sanity";


export default defineType({

    title: 'Nav Item',
    name: 'navItem',
    type: 'object',
    fields:[
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
        }),
        
        defineField({
            title: 'Link',
            name:'link',
            type: 'reference',
                to: [
                  { type: 'post' },
                  { type: 'page' },
                  { type: 'menus' },
                ]
            }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'link',          
        },
        prepare({ title, media }) {
            return {
                title,
                media
            }
        }
      }
    
})