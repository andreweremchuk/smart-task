import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { dates } from "../../constants/dates"
import { images } from '../../constants'
const Home = () => {

  const [selectedDate, setSelectedDate] = useState(0)

  const DateCard = ({ date, day }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedDate(date)}>
        <View className={`w-12 h-16 items-center ${date === selectedDate && "bg-[#FFAC4B]"} rounded-xl mx-[3px]`}>
          <Text className={`text-lg font-semibold ${date === selectedDate && "text-white"}`}>{date}</Text>
          <Text className={`mt-3 ${date === selectedDate && "text-white"}`}>{day}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const TaskCard = ({ title }) => {
    return (
      <TouchableOpacity>
        <View className="mx-2 w-[128px] h-[184px] bg-[#E8EEF3] rounded-xl">
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <Text className="text-3xl font-semibold mx-2">Calendar</Text>
        <ScrollView
          className="mt-4"
          horizontal
          showsHorizontalScrollIndicator={false}>
          {Object.keys(dates).map((month) => {
            return (
              <>
                {Object.keys(dates[month]).map((date) => {
                  let day = dates[month][date]
                  return (
                    <DateCard
                      onPress={() => console.log("r")}
                      date={date}
                      day={day.slice(0, 3)}
                    />
                  )
                })}
              </>
            )
          })}
        </ScrollView>
        <Text className="text-4xl font-semibold mx-2 mt-4">My Tasks</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4">
          <TaskCard title="Task 1" />
          <TaskCard title="Task 2" />
          <TaskCard title="Task 3" />
          <TaskCard title="Task 4" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home