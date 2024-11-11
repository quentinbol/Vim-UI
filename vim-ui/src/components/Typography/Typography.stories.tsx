import React from 'react';
import Typography, { TypographyProps } from './Typography';
import { options } from './constants';
import { Meta, StoryFn as ComponentStory } from '@storybook/react';

export default {
    title: 'Typography',
    component: Typography,
    tags: ['autodocs'],
    args: {
        children: 'Typography content',
    },
    argTypes: {
        color: {
            description: '**options:**',
            table: {
                summary: options.colors.map((option) => `'${option}'`).join(' | '),
            },
            control: {
                type: 'select',
                options: options.colors,
            },
        },
        size: {
            description: '**options:**',
            table: {
                summary: options.sizes.map((option) => `'${option}'`).join(' | '),
            },
            control: {
                type: 'select',
                options: options.sizes,
            },
        },
        weight: {
            description: '**options:**',
            table: {
                summary: options.weights.map((option) => `'${option}'`).join(' | '),
            },
            control: {
                type: 'select',
                options: options.weights,
            },
        },
        types: {
            description: '**options:**',
            table: {
                summary: options.types.map((option) => `'${option}'`).join(' | '),
            },
            control: {
                type: 'select',
                options: options.types,
            },
        },
    },
} as Meta;

const Template: (args: TypographyProps) => React.JSX.Element = (args: TypographyProps) => <Typography {...args} />;

const ListTemplate: ({ items, ...args }: {
    items: {
        color?: string;
        size?: string;
        weight?: string;
        type?: string;
    }[];
} & TypographyProps) => React.JSX.Element[] = ({
    items,
    ...args
}: {
    items: { color?: string; size?: string; weight?: string; type?: string }[];
} & TypographyProps) =>
    items.map((item, index) => <Typography key={index} {...args} {...item} />);

export const Default: ComponentStory<typeof Template> = Template.bind({});

export const Colors: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Colors.args = {
    items: options.colors.map((color) => ({ color })),
};

export const Sizes: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((size) => ({ size })),
};

export const Weights: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Weights.args = {
    items: options.weights.map((weight) => ({ weight })),
};

export const Types: ComponentStory<typeof ListTemplate> = ListTemplate.bind({});
Types.args = {
    items: options.types.map((type) => ({ type })),
};
