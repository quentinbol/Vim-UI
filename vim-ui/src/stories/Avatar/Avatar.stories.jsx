import Avatar from "./Avatar";
import { options } from "./constants";

export default {
    title: "Avatar",
    component: Avatar,
    args: {
        src: "https://picsum.photos/id/1033/400/400",
        width: 200,
    },
    argTypes: {
        size: {
            description: "**options:**",
            table: {
                summary: options.sizes.map(option => `'${option}'`).join(" | ")
            },
            control: {
                type: 'select', options: options.sizes
            }
        },
    },
    parameters: {
        __sb: { fd: "row"}
    }
}

const Template = (T) => <Avatar {...T} />
const ListTemplate = ({ items, ...T}) => items.map(
    (item, index) => <Avatar key={index} {...T}{...item} />
)

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = {
    items: (options.sizes || []).map((size) => ({ size }))
}
