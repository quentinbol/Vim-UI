import React from 'react';
import { Meta, StoryFn as ComponentStory } from '@storybook/react';
import Card, { CardProps } from './Card';
import { options } from './constants';

export default {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: "Card content",
        color: 'primary',
        size: 'sm',
    },
    argTypes: {
        color: {
            description: "**options:**",
            table: {
                summary: options.colors.map(option => `'${option}'`).join(" | ")
            },
            control: {
                type: 'select', options: options.colors
            }
        },
        size: {
            description: "**options:**",
            table: {
                summary: options.sizes.map(option => `'${option}'`).join(" | ")
            },
            control: {
                type: 'select', options: options.sizes
            }
        },
        isClickable: {
            control: 'boolean',
        },
        isDragable: {
            control: 'boolean',
        },
    }
} as Meta;

const Template: (args: CardProps) => React.JSX.Element = (args: CardProps) => <Card {...args} />;

const ListTemplate: ({ items, ...args }: {
    items: {
        color?: string;
        size?: string;
    }[];
} & CardProps) => React.JSX.Element = ({ 
    items,
    ...args 
}) => (
    <>
        {items.map((item: any, index: number) => (
            <Card key={index} {...args} {...item} />
        ))}
    </>
);

export const Default: ComponentStory<typeof Template> = Template.bind({});

export const Clickable: ComponentStory<typeof Template> = Template.bind({});
Clickable.args = {
    isClickable: true,
};

export const Dragable: ComponentStory<typeof Template> = Template.bind({});
Dragable.args = {
    isDragable: true,
};

export const Colors: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Colors.args = {
    items: (options.colors || []).map((color) => ({ color }))
};

export const Sizes: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Sizes.args = {
    items: (options.sizes || []).map((size) => ({ size }))
};
