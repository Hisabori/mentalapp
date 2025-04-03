
import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  title: string;
  time: string;
  color: string;
}

const MedicationCard = ({ title, time, color }: Props) => {
  return (
    <View style={{
      backgroundColor: color,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3
    }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ marginTop: 4, fontSize: 16, color: '#333' }}>{time}</Text>
    </View>
  );
};

export default MedicationCard;
