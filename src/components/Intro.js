import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import tailwind from 'tailwind-rn';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const Intro = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tailwind('p-3 mt-14')}>
          <View
            style={[
              tailwind(' w-full bg-purple-300 rounded-lg p-4 '),
              { backgroundColor: '#bbcfff' },
            ]}>
            <Text
              style={[
                tailwind('text-white font-bold text-base text-justify'),
                {
                  color: '#5f9ea0',
                  fontSize: 16,
                  textAlign: 'justify',
                  letterSpacing: 2,
                },
              ]}>
              DỰ ÁN CỘNG ĐỒNG “QUAN TRẮC MÔI TRƯỜNG THEO THỜI GIAN THỰC WEBSITE
              TRỰC TUYẾN{'\n'}
              <Text style={tailwind('text-white font-bold')}>
                Dự án: ReWE project for Community
              </Text>
              {'\n'}
              <Text style={[tailwind('text-white font-semibold')]}>
                - English: “Real-time Website Environmental monitoring System”
                Project for Community.
              </Text>
              <Text style={tailwind('text-white font-semibold')}>
                {'\n'}- Tên tiếng Việt: Dự án cộng đồng “Quan trắc môi trường
                theo thời gian thực website trực tuyến”.
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
              }}>
              {'\n'}
              Giới thiệu dự án
            </Text>
            <View
              style={{
                height: 3,
                width: 200,
                backgroundColor: '#5f9ea0',
              }}></View>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'justify',
                letterSpacing: 2,
              }}>
              {'\n'}
              Trọng tâm phát triển dự án "PHÁT TRIỂN ỨNG DỤNG VỀ QUAN TRẮC VÀ CẢNH BÁO PHÓNG XẠ THỜI GIAN THỜI GIAN THỰC TRỰC TUYẾN" là khả năng lưu trữ và trích xuất dữ liệu của các trạm độc lập, các trạm đo bao gồm: 1 trạm của hệ đo Inspector NI myRIO và nhiều trạm của hệ đo Arduino Cajoe Geiger. Dữ liệu của cả 2 hệ đo trên được lưu trữ trên Cloud Database.  Bên cạnh đó, ứng dụng điện thoại được xây dựng phục vụ việc hiển thị, quan sát số liệu đo theo thời gian thực.{'\n'}
              {'\n'}
              <Text style={tailwind('font-bold')}>
                Mô hình tổng thể được chia thành ba thành phần chính trong dự án bao gồm:{' '}
              </Text>
              {'\n'}
              {'\n'}
              <Text style={[tailwind('font-bold'), { color: '#5f9ea0' }]}>
                (1) Hệ đo ghi nhận phóng xạ; {'\n'}
                {'\n'}(2) Mô hình truyền và lưu trữ dữ liệu trên nền tảng Database;{' '}
                {'\n'}
                {'\n'}(3) Phần ứng dụng;
              </Text>
              {'\n'}
              {'\n'}
              <Text style={tailwind('font-bold')}>Hình 2.1</Text> mô tả tổng quan cách thức truyền, lưu trữ và hiển thị dữ liệu của cả 2 hệ đo. Dữ liệu sau khi được ghi nhận bởi hệ đo vật lý (1), sẽ được truyền thẳng lên internet. Thông qua Cloud Database Server, dữ liệu được xử lý và lưu trữ trên Cloud Database (2). API được thiết kế với mục đích trao đổi dữ liệu từ Cloud Database và client (app). Sau cùng, ứng dụng điện thoại được xây dựng, trao đổi dữ liệu thông qua API và hiển thị ra ngoài màn hình (3). Dự án này được phát triển bởi
              nhóm nghiên cứu của tiến sĩ Võ Hồng Hải, trường đại học Khoa học
              Tự nhiên, ĐHQG-TPHCM.
            </Text>
          </View>
          <Image
            source={require('../assets/system.png')}
            style={{ height: DEVICE_WIDTH - 90, width: DEVICE_WIDTH - 30 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              letterSpacing: 3,
              fontStyle: 'italic',
            }}>
            Hình 1.1 Hình 2.1. Mô hình tổng hệ thống quan trắc phóng xạ theo thời gian thực của dự án cộng đồng "PHÁT TRIỂN ỨNG DỤNG VỀ QUAN TRẮC VÀ CẢNH BÁO PHÓNG XẠ THỜI GIAN THỜI GIAN THỰC TRỰC TUYẾN". Thực hiện bởi nhóm nghiên cứu của TS. Võ Hồng Hải, Đại học Khoa Tự nhiên – ĐHQG-TPHCM.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Intro;
