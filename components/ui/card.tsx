// components/ui/card.tsx
import { View, StyleSheet, ViewProps } from 'react-native';

export const Card = ({ children, style, ...props }: ViewProps) => {
    return <View style={[styles.card, style]} {...props}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});
