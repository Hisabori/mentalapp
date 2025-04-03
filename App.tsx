import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Bell, Sun, CloudSun, Moon, Pill } from 'lucide-react-native';
import { Card } from '@/components/ui/card';
import { format } from "date-fns";

const reminders = [
  { time: "09:00", label: "아침 약", icon: <Sun size={20} /> },
  { time: "12:30", label: "점심 약", icon: <CloudSun size={20} /> },
  { time: "21:00", label: "저녁 약", icon: <Moon size={20} /> },
  { time: "PRN", label: "필요시 (불안 시) 약", icon: <Pill size={20} /> },
];

export default function MedicationReminderApp() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
      <View className="flex-1 bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] px-4 py-6">
        <Text className="text-2xl font-bold text-center mb-6">💊 투약 알림</Text>
        <ScrollView className="space-y-4">
          {reminders.map((reminder, index) => (
              <Card key={index} className="p-4 rounded-2xl shadow-md flex-row items-center justify-between bg-white">
                <View className="flex-row items-center space-x-3">
                  {/*reminder.icon*/}
                  <View>
                    <Text className="text-lg font-semibold">{reminder.label}</Text>
                    <Text className="text-sm text-gray-500">
                      {reminder.time === "PRN" ? "필요 시 복용" : `${reminder.time} 복용`}
                    </Text>
                  </View>
                </View>
                <View>
                  {reminder.time !== "PRN" && (
                      <Text className="text-sm text-gray-400">
                        {format(now, "HH:mm") === reminder.time ? "⏰ 지금 복용 시간이에요!" : ""}
                      </Text>
                  )}
                </View>
              </Card>
          ))}
        </ScrollView>
      </View>
  );
}
