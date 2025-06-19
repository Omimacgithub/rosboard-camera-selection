cmake_minimum_required(VERSION 2.8.3)
project(rosboard)

find_package(catkin REQUIRED COMPONENTS
  rospy
  std_msgs
  sensor_msgs
  message_generation
)

catkin_python_setup()
catkin_package(

  CATKIN_DEPENDS message_runtime std_msgs sensor_msgs
)
generate_messages($
   DEPENDENCIES$
   std_msgs$
   visualization_msgs$
   sensor_msgs$
)$ 

catkin_install_python(PROGRAMS
  nodes/rosboard_node
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

install(DIRECTORY
    launch
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)
