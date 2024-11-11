import React from 'react';
import { Meta, StoryFn as ComponentStory } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import { options } from './constants';

export default {
    title: 'Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://picsum.photos/id/1033/400/400',
        width: 200,
        size: 'md',
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
        }
    },
    parameters: {
        __sb: { fd: 'row' },
    }
} as Meta;

const Template: (args: AvatarProps) => React.JSX.Element = (args: AvatarProps) => <Avatar {...args} />;

const ListTemplate: ({ items, ...args }: {
    items: {
        size?: string;
    }[];
} & AvatarProps) => React.JSX.Element[] = ({
    items,
    ...args
}: {
    items: { size?: string}[];
} & AvatarProps) =>
    items.map((item, index) => <Avatar key={index} {...args} {...item} />);

export const Default: ComponentStory<typeof Template> = Template.bind({});

export const Sizes: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Sizes.args = {
    items: (options.sizes || []).map((size) => ({ size }))
};
