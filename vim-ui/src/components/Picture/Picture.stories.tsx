import React from 'react';
import Picture, { PictureProps } from './Picture';
import { Meta, StoryFn as ComponentStory } from '@storybook/react';

export default {
    title: 'Picture',
    component: Picture,
    args: {
        src: 'https://picsum.photos/id/1033/400/400',
        width: 200,
        height: 'auto',
        isRounded: false,
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'URL de l\'image',
        },
        width: {
            control: 'number',
            description: 'Largeur de l\'image',
        },
        height: {
            control: 'number',
            description: 'Hauteur de l\'image',
        },
        isRounded: {
            control: 'boolean',
            description: 'Si l\'image est arrondie',
        },
    },
} as Meta;

const Template: (args: PictureProps) => React.JSX.Element = (args: PictureProps) => (
    <Picture {...args} />
);

export const Default: ComponentStory<typeof Template> = Template.bind({});

export const Rounded: ComponentStory<typeof Template> = Template.bind({});
Rounded.args = {
    isRounded: true,
};

