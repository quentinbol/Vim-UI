import Picture from "./Picture";

export default {
    title: "Picture",
    component: Picture,
    args: {
        src: "https://picsum.photos/id/1033/400/400",
        width: 200,
    },
    argTypes: {
        width: {
            control: "number",
        },
        height: {
            control: "number",
        },
    }
}

const Template = (T) => <Picture {...T} />

export const Default = Template.bind({})

export const Rounded = Template.bind({})
Rounded.args = {
    isRounded: true,
}