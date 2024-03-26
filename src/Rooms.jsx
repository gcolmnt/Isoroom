import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

import { ReturnLeft } from './ReturnLeft.jsx'
import { ReturnRight } from './ReturnRight.jsx'
import { DoorRight } from './DoorRight.jsx'
import { DoorLeft } from './DoorLeft.jsx'

import RoomKitchen from './RoomKitchen.jsx'
import RoomKitchenLeftWall from './RoomKitchenLeftWall.jsx'
import RoomKitchenRightWall from './RoomKitchenRightWall.jsx'
import RoomKitchenFurniture from './RoomKitchenFurniture.jsx'
import RoomKitchenFridge from './RoomKitchenFridge.jsx'

import RoomStart from './RoomStart.jsx'
import RoomStartLeftWall from './RoomStartLeftWall.jsx'
import RoomStartRightWall from './RoomStartRightWall.jsx'
import RoomStartLeftDoor from './RoomStartLeftDoor.jsx'
import RoomStartRightDoor from './RoomStartRightDoor.jsx'
import RoomStartRock from './RoomStartRock.jsx'
import RoomStartDeck from './RoomStartDeck.jsx'
import RoomStartFox from './RoomStartFox.jsx'

import RoomStudyroom from './RoomStudyroom.jsx'
import RoomStudyroomChair from './RoomStudyroomChair.jsx'
import RoomStudyroomDesk from './RoomStudyroomDesk.jsx'
import RoomStudyroomLeftWall from './RoomStudyroomLeftWall.jsx'
import RoomStudyroomRadio from './RoomStudyroomRadio.jsx'
import RoomStudyroomRightWall from './RoomStudyroomRightWall.jsx'
import RoomStudyroomSpeaker from './RoomStudyroomSpeaker.jsx'

import RoomBathroom from './RoomBathroom.jsx'
import RoomBathroomBathtub from './RoomBathroomBathtub.jsx'
import RoomBathroomWater from './RoomBathroomWater.jsx'
import RoomBathroomLeftWall from './RoomBathroomLeftWall.jsx'
import RoomBathroomRightWall from './RoomBathroomRightWall.jsx'
import RoomBathroomRug from './RoomBathroomRug.jsx'
import RoomBathroomStool from './RoomBathroomStool.jsx'
import RoomBathroomToilet from './RoomBathroomToilet.jsx'

import RoomLivingroom from './RoomLivingroom.jsx'
import RoomLivingroomLeftDoor from './RoomLivingroomLeftDoor.jsx'
import RoomLivingroomRightDoor from './RoomLivingroomRightDoor.jsx'
import RoomLivingroomLeftWall from './RoomLivingroomLeftWall.jsx'
import RoomLivingroomRightWall from './RoomLivingroomRightWall.jsx'
import RoomLivingroomPillow from './RoomLivingroomPillow.jsx'
import RoomLivingroomPillow1 from './RoomLivingroomPillow1.jsx'
import RoomLivingroomPillow2 from './RoomLivingroomPillow2.jsx'
import RoomLivingroomPillow3 from './RoomLivingroomPillow3.jsx'
import RoomLivingroomBonzai from './RoomLivingroomBonzai.jsx'
import RoomLivingroomKotatsu from './RoomLivingroomKotatsu.jsx'

import RoomBedroom from './RoomBedroom.jsx'
import RoomBedroomBed from './RoomBedroomBed.jsx'
import RoomBedroomCatBed from './RoomBedroomCatBed.jsx'
import RoomBedroomDaruma from './RoomBedroomDaruma.jsx'
import RoomBedroomLeftWall from './RoomBedroomLeftWall.jsx'
import RoomBedroomRightWall from './RoomBedroomRightWall.jsx'
import RoomBedroomShelf from './RoomBedroomShelf.jsx'


export function Rooms()
{
  /**
   * Refs
   */
  const roomStart = useRef()
  const start = useRef()
  const startLeftWall = useRef()
  const startRightWall = useRef()
  const startLeftDoor = useRef()
  const startRightDoor = useRef()
  const startFox = useRef()
  const startDeck = useRef()
  const startRock = useRef()

  const roomKitchen = useRef()
  const kitchen = useRef()
  const kitchenLeftWall = useRef()
  const kitchenRightWall = useRef()
  const kitchenFurniture = useRef()
  const kitchenFridge = useRef()

  const roomBathroom = useRef()
  const bathroom = useRef()
  const bathroomBathtub = useRef()
  const bathroomWater = useRef()  
  const bathroomLeftWall = useRef()
  const bathroomRightWall = useRef()
  const bathroomRug = useRef()
  const bathroomStool = useRef()
  const bathroomToilet = useRef()

  const roomStudyroom = useRef()
  const studyroom = useRef()
  const studyroomChair = useRef()
  const studyroomDesk = useRef()
  const studyroomLeftWall = useRef()
  const studyroomRightWall = useRef()
  const studyroomRadio = useRef()
  const studyroomSpeaker = useRef()

  const roomLivingroom = useRef()
  const livingroom = useRef()
  const livingroomLeftDoor = useRef()
  const livingroomRightDoor = useRef()
  const livingroomLeftWall = useRef()
  const livingroomRightWall = useRef()
  const livingroomPillow = useRef()
  const livingroomPillow1 = useRef()
  const livingroomPillow2 = useRef()
  const livingroomPillow3 = useRef()
  const livingroomBonzai = useRef()
  const livingroomKotatsu = useRef()

  const roomBedroom = useRef()
  const bedroom = useRef()
  const bedroomBed = useRef()
  const bedroomCatBed = useRef()
  const bedroomDaruma = useRef()
  const bedroomLeftWall = useRef()
  const bedroomRightWall = useRef()
  const bedroomShelf = useRef()

  /**
   * Manage Room Position
   */
  const [startPosition, setStartPosition] = useState([0, 0, 0])
  const [startFurniturePosition, setStartFurniturePosition] = useState([0, 0, 0])
  const [kitchenPosition, setKitchenPosition] = useState([0, 10, 0])
  const [bathroomPosition, setBathroomPosition] = useState([0, 10, 0])
  const [studyroomPosition, setStudyroomPosition] = useState([0, 10, 0])
  const [livingroomPosition, setLivingroomPosition] = useState([0, 10, 0])
  const [bedroomPosition, setBedroomPosition] = useState([0, 10, 0])

  /**
   * Manage door Position and Scale
   */
  const [leftDoorPosition, setLeftDoorPosition] = useState([-1, 1.42, -1])
  const [rightDoorPosition, setRightDoorPosition] = useState([1, 1.42, -1])
  const [doorScale, setDoorScale] = useState([0.1, 1.83, 1.3])


  /**
   * Active room tracker
   */
  const [currentRoom, setCurrentRoom] = useState('Start')

  /**
   * Doors Switch
   */
  const [activeDoorLeft, setActiveDoorLeft] = useState(false)
  const [activeDoorRight, setActiveDoorRight] = useState(false)
  const [activeReturnLeft, setActiveReturnLeft] = useState(false) 
  const [activeReturnRight, setActiveReturnRight] = useState(false)

  /**
   * Managing componment state
   */
  // Return Button
  const [existReturnLeft, setExistReturnLeft] = useState(false)
  const [existReturnRight, setExistReturnRight] = useState(false)

  // Doors
  const [existDoorLeft, setExistDoorLeft] = useState(false)
  const [existDoorRight, setExistDoorRight] = useState(false)
  const [doorLeftHovered, setDoorLeftHovered] = useState(false)
  const [doorRightHovered, setDoorRightHovered] = useState(false)
  const [livingroomDoorLeftHovered, setLivingroomDoorLeftHovered] = useState(false)
  const [livingroomDoorRightHovered, setLivingroomDoorRightHovered] = useState(false)
  const [startDoorLeftHovered, setStartDoorLeftHovered] = useState(false)
  const [startDoorRightHovered, setStartDoorRightHovered] = useState(false)

  const handleDoorLeftHoverChange = (isHovered) => {
    setDoorLeftHovered(isHovered)
  }
  const handleDoorRightHoverChange = (isHovered) => {
    setDoorRightHovered(isHovered)
  }
  const handleLivingroomLeftDoorHoverChange = (isHovered) => {
    setLivingroomDoorLeftHovered(isHovered)
  }
  const handleLivingroomRightDoorHoverChange = (isHovered) => {
    setLivingroomDoorRightHovered(isHovered)
  }
  const handleStartLeftDoorHoverChange = (isHovered) => {
    setStartDoorLeftHovered(isHovered)
  }
  const handleStartRightDoorHoverChange = (isHovered) => {
    setStartDoorRightHovered(isHovered)
  }

  // Rooms
  const [existStart, setExistStart] = useState(true)
  const [existKitchen, setExistKitchen] = useState(true)
  const [existStudyroom, setExistStudyroom] = useState(true)
  const [existBathroom, setExistBathroom] = useState(true)
  const [existLivingroom, setExistLivingroom] = useState(true)
  const [existBedroom, setExistBedroom] = useState(true)
  const [firstRender, setIsFirstRender] = useState(false)

  /**
   * Animations
   */
  // DOORS
  // Start
  const [startOpenLeftDoor, setStartOpenLeftDoor] = useState(false)
  const [startOpenRightDoor, setStartOpenRightDoor] = useState(false)

  // Livingroom
  const [livingroomOpenLeftDoor, setLivingroomOpenLeftDoor] = useState(false)
  const [livingroomOpenRightDoor, setLivingroomOpenRightDoor] = useState(false)


  // ROOMS
  const [startToKitchen, setStartToKitchen] = useState(false)
  const [startToLivingroom, setStartToLivingroom] = useState(false)
  const [livingroomToBedroom, setLivingroomToBedroom] = useState(false)
  const [livingroomToBathroom, setLivingroomToBathroom] = useState(false)
  const [livingroomToStart, setLivingroomToStart] = useState(false)
  const [kitchenToBathroom, setKitchentoBathroom] = useState(false)
  const [kitchenToStudyroom, setKitchentoStudyroom] = useState(false)
  const [kitchenToStart, setKitchentoStart] = useState(false)
  const [bathroomToLivingroom, setBathroomToLivingroom] = useState(false)
  const [bathroomToKitchen, setBathroomToKitchen] = useState(false)
  const [bedroomToLivingroom, setBedroomToLivingroom] = useState(false)
  const [studyroomToKitchen, setStudyroomToKitchen] = useState(false)

  const speed = 2 // Adjust the speed of the animation

  // DOORS
  // Start
  const handleAnimationStartOpenLeftDoor = () => {
    if (existStart) {
    gsap.to(startLeftDoor.current.position, {
      x: -1, y: 0, z: 1, duration: speed * 0.25,
      onComplete: () => {
        setExistDoorLeft(true)
      }
    })}
  }
  const handleAnimationStartOpenRightDoor = () => {
    if (existStart) {
    gsap.to(startRightDoor.current.position, {
      x: 1, y: 0, z: 1, duration: speed * 0.25,
      onComplete: () => {
        setExistDoorRight(true)
      }
    })}
  }

  // Livingroom
  const handleAnimationLivingroomOpenLeftDoor = () => {
    if (existLivingroom) {
    gsap.to(livingroomLeftDoor.current.position, {
      x: -1, y: 0, z: 1, duration: speed * 0.25,
      onComplete: () => {
        setExistDoorLeft(true)
      }
    })}
  }
  const handleAnimationLivingroomOpenRightDoor = () => {
    if (existLivingroom) {
    gsap.to(livingroomRightDoor.current.position, {
      x: 1, y: 0, z: 1, duration: speed * 0.25,
      onComplete: () => {
        setExistDoorRight(true)
      }
    })}
  }

  // ROOMS
  // Start >>> Kitchen
  const handleAnimationStartToKitchen = () => {
    document.body.style.cursor = 'auto' 
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Start Out
    gsap.to(roomStart.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistStart(false)
      }
    })
    // Kitchen In
    gsap.to(kitchen.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(kitchenLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(kitchenFurniture.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(kitchenFridge.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(kitchenRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistDoorLeft(true)
        setExistDoorRight(true)
        setExistStart(false)
        setCurrentRoom('Kitchen')
        setStartToKitchen(false)
      }
    })
  }

  // Start >>> LivingRoom
  const handleAnimationStartToLivingroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    setStartOpenLeftDoor(false)
    // Start Out
    gsap.to(roomStart.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistStart(false)
      }
    })
    // Livingroom In
    gsap.to(livingroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(livingroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomLeftDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(livingroomPillow1.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(livingroomPillow2.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow3.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(livingroomBonzai.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(livingroomKotatsu.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.3,
    })
    gsap.to(livingroomRightDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
    })
    gsap.to(livingroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnRight(true)
        setCurrentRoom('Livingroom')
        setStartToLivingroom(false)
      }
    })
  }

  // Livingroom >>> BedRoom
  const handleAnimationLivingroomToBedroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Livingroom Out
    gsap.to(roomLivingroom.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistLivingroom(false)
      }
    })
    // Bedroom In
    gsap.to(bedroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(bedroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bedroomBed.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(bedroomCatBed.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bedroomDaruma.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(bedroomShelf.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(bedroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnRight(true)
        setExistLivingroom(false)
        setCurrentRoom('Bedroom')
        setLivingroomToBedroom(false)
      }
    })
  }

  // Livingroom >>> BathRoom
  const handleAnimationLivingroomToBathroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Livingroom Out
    gsap.to(roomLivingroom.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistLivingroom(false)
      }
    })
    // BathRoom In
    gsap.to(bathroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(bathroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bathroomRug.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(bathroomStool.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bathroomToilet.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(bathroomBathtub.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(bathroomWater.current.position, {
      x: -0.33, y: 0.7, z: -0.87, duration: speed * 1.25,
    })
    gsap.to(bathroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistReturnRight(true)
        setExistLivingroom(false)
        setCurrentRoom('Bathroom')
        setLivingroomToBathroom(false)
      }
    })
  }

  // LivingRoom >>> Start
  const handleAnimationLivingroomToStart = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Livingroom Out
    gsap.to(roomLivingroom.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistLivingroom(false)
      }
    })
    // Start In
    gsap.to(start.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(startLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(startLeftDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(startDeck.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(startFox.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(startRock.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.3,
    })
    gsap.to(startRightDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
    })
    gsap.to(startRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistLivingroom(false)
        setCurrentRoom('Start')
        setLivingroomToStart(false)
      }
    })
  }

  // Kitchen >>> Bathroom
  const handleAnimationKitchenToBathroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Kitchen Out
    gsap.to(roomKitchen.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistKitchen(false)
      }
    })

    // BathRoom In
    gsap.to(bathroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(bathroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bathroomRug.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(bathroomStool.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(bathroomToilet.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(bathroomBathtub.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(bathroomWater.current.position, {
      x: -0.33, y: 0.7, z: -0.87, duration: speed * 1.25,
    })
    gsap.to(bathroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistReturnRight(true)
        setExistKitchen(false)
        setCurrentRoom('Bathroom')
        setKitchentoBathroom(false)
      }
    })
  }    

  // Kitchen >>> StudyRoom
  const handleAnimationKitchenToStudyroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Kitchen Out
    gsap.to(roomKitchen.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistKitchen(false)
      }
    })
    // Studyroom In
    gsap.to(studyroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(studyroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(studyroomChair.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(studyroomDesk.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(studyroomRadio.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(studyroomSpeaker.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(studyroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistKitchen(false)
        setCurrentRoom('Studyroom')
        setKitchentoStudyroom(false)
      }
    })
  }

  // Kitchen >>> Start
  const handleAnimationKitchentoStart = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Kitchen Out
    gsap.to(roomKitchen.current.position, {
      x: 0, y: -10, z: 0, duration: speed,
      onComplete: () => {
        setExistKitchen(false)
      }
    })
    // Start In
    gsap.to(start.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(startLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(startLeftDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(startDeck.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(startFox.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(startRock.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.3,
    })
    gsap.to(startRightDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
    })
    gsap.to(startRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistKitchen(false)
        setCurrentRoom('Start')
        setKitchentoStart(false)
      }
    })    
  }

  // Bathroom >>> LivingRoom
  const handleAnimationBathroomToLivingroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Bathroom Out
    gsap.to(roomBathroom.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistBathroom(false)
      }
    })
    // Livingroom In
    gsap.to(livingroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(livingroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomLeftDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(livingroomPillow1.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(livingroomPillow2.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow3.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(livingroomBonzai.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(livingroomKotatsu.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.3,
    })
    gsap.to(livingroomRightDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
    })
    gsap.to(livingroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnRight(true)
        setExistBathroom(false)
        setCurrentRoom('Livingroom')
        setBathroomToLivingroom(false)
      }
    })    
  }

  // Bathroom >>> Kitchen
  const handleAnimationBathroomToKitchen = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Bathroom Out
    gsap.to(roomBathroom.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistBathroom(false)
      }
    })
    // Kitchen In
    gsap.to(kitchen.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(kitchenLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(kitchenFurniture.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(kitchenFridge.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(kitchenRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistDoorLeft(true)
        setExistDoorRight(true)
        setExistBathroom(false)
        setCurrentRoom('Kitchen')
        setBathroomToKitchen(false)
      }
    })    
  }
  
  // BedRoom >>> LivingRoom
  const handleAnimationBedroomToLivingroom = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Bedroom Out
    gsap.to(roomBedroom.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistBedroom(false)
      }
    })
    // Livingroom In
    gsap.to(livingroom.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(livingroomLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomLeftDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(livingroomPillow1.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(livingroomPillow2.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(livingroomPillow3.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.15,
    })
    gsap.to(livingroomBonzai.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.25,
    })
    gsap.to(livingroomKotatsu.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.3,
    })
    gsap.to(livingroomRightDoor.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
    })
    gsap.to(livingroomRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnRight(true)
        setExistBedroom(false)
        setCurrentRoom('Livingroom')
        setBedroomToLivingroom(false)
      }
    })  
  }
  
  // StudyRoom >>> Kitchen
  const handleAnimationStudyroomToKitchen = () => {
    document.body.style.cursor = 'auto'
    setActiveDoorLeft(false)
    setActiveDoorRight(false)
    setActiveReturnLeft(false)
    setActiveReturnRight(false)
    // Studyroom Out
    gsap.to(roomStudyroom.current.position, {
      x: 0, y: 10, z: 0, duration: speed,
      onComplete: () => {
        setExistStudyroom(false)
      }
    })
    // Kitchen In
    gsap.to(kitchen.current.position, {
      x: 0, y: 0, z: 0, duration: speed,
    })
    gsap.to(kitchenLeftWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.1,
    })
    gsap.to(kitchenFurniture.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.05,
    })
    gsap.to(kitchenFridge.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1,
    })
    gsap.to(kitchenRightWall.current.position, {
      x: 0, y: 0, z: 0, duration: speed * 1.5,
      onComplete: () => {
        setExistReturnLeft(true)
        setExistDoorLeft(true)
        setExistDoorRight(true)
        setExistStudyroom(false)
        setCurrentRoom('Kitchen')
        setStudyroomToKitchen(false)
      }
    })  
  }
  

  useEffect(() => {
    if (!firstRender) {
      setExistKitchen(false)
      setExistStudyroom(false)
      setExistBathroom(false)
      setExistLivingroom(false)
      setExistBedroom(false)
      setIsFirstRender(true)
    }
    if (startOpenLeftDoor) {
      handleAnimationStartOpenLeftDoor()
    }
    if (startOpenRightDoor) {
      handleAnimationStartOpenRightDoor()
    }
    if (livingroomOpenLeftDoor) {
      handleAnimationLivingroomOpenLeftDoor()
    }
    if (livingroomOpenRightDoor) {
      handleAnimationLivingroomOpenRightDoor()
    }

    if (startToKitchen) {
      handleAnimationStartToKitchen()
    }
    if (startToLivingroom) {
      handleAnimationStartToLivingroom()
    }
    if (livingroomToBedroom) {
      handleAnimationLivingroomToBedroom()
    }
    if (livingroomToBathroom) {
      handleAnimationLivingroomToBathroom()
    }
    if (livingroomToStart) {
      handleAnimationLivingroomToStart()
    }
    if (kitchenToBathroom) {
      handleAnimationKitchenToBathroom()
    }
    if (kitchenToStudyroom) {
      handleAnimationKitchenToStudyroom()
    }
    if (kitchenToStart) {
      handleAnimationKitchentoStart()
    }
    if (bathroomToLivingroom) {
      handleAnimationBathroomToLivingroom()
    }
    if (bathroomToKitchen) {
      handleAnimationBathroomToKitchen()
    }
    if (bedroomToLivingroom) {
      handleAnimationBedroomToLivingroom()
    }
    if (studyroomToKitchen) {
      handleAnimationStudyroomToKitchen()
    }
  }, [startOpenLeftDoor, startOpenRightDoor, livingroomOpenLeftDoor, livingroomOpenRightDoor,
  startToKitchen, startToLivingroom, livingroomToBedroom, 
  livingroomToBathroom, livingroomToStart, kitchenToBathroom,
  kitchenToStudyroom, kitchenToStart, bathroomToLivingroom,
  bathroomToKitchen, bedroomToLivingroom, studyroomToKitchen])

  useFrame((state, delta) => {
    /**
     * DOORS
     */
    // START
    if (currentRoom === 'Start' && startDoorLeftHovered) {
      setTimeout(() => {
        setStartOpenLeftDoor(true)
      }, 10)
    }
    if (currentRoom === 'Start' && startDoorRightHovered) {
      setTimeout(() => {
      setStartOpenRightDoor(true)
    }, 10)
    }
    // LIVINGROOM
    if (currentRoom === 'Livingroom' && livingroomDoorLeftHovered) {
      setTimeout(() => {
      setLivingroomOpenLeftDoor(true)
    }, 10)
    }
    if (currentRoom === 'Livingroom' && livingroomDoorRightHovered) {
      setTimeout(() => {
      setLivingroomOpenRightDoor(true)
    }, 10)
    }

    // ROOMS
    // Start >>> Kitchen
    if (currentRoom === 'Start' && activeDoorRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setKitchenPosition([10, 0, -10])
      console.log("hop!")
      setLeftDoorPosition([-1, 1.15, -0.95])
      setRightDoorPosition([1, 1.15, -0.95])
      setDoorScale([0.1, 1.9, 0.9])
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistKitchen(true)
      setStartToKitchen(true)
    }

    // Start >>> LivingRoom
    if (currentRoom === 'Start' && activeDoorLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setLivingroomPosition([-10, 0, -10])
      setLeftDoorPosition([-1, 1.15, -1])
      setRightDoorPosition([1, 1.15, -1])
      setDoorScale([0.1, 1.9, 1.3])
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistLivingroom(true)
      setStartToLivingroom(true)
    }
    
    /**
     * LIVINGROOM
     */
    // LivingRoom >>> BedRoom
    if (currentRoom === 'Livingroom' && activeDoorLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setBedroomPosition([-10, 0, -10])
      setExistReturnRight(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistBedroom(true)
      setLivingroomToBedroom(true)    
    }

    // LivingRoom >>> BathRoom
    if (currentRoom === 'Livingroom' && activeDoorRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setBathroomPosition([10, 0, -10])
      setExistReturnRight(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistBathroom(true)
      setLivingroomToBathroom(true)
    }

    // LivingRoom >>> Start
    if (currentRoom === 'Livingroom' && activeReturnRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setStartPosition([10, 0, 10])
      setStartFurniturePosition([0, 10, 0])
      setLeftDoorPosition([-1, 1.42, -1])
      setRightDoorPosition([1, 1.42, -1])
      setDoorScale([0.1, 1.83, 1.3])
      setExistReturnRight(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistStart(true)
      setLivingroomToStart(true)
    }

    /**
     * KITCHEN
     */
    // Kitchen >>> Bathroom
    if (currentRoom === 'Kitchen' && activeDoorLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setBathroomPosition([-10, 0, -10])
      setExistReturnLeft(false)
      setExistReturnRight(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistBathroom(true)
      setKitchentoBathroom(true)
    }
    // Kitchen >>> StudyRoom
    if (currentRoom === 'Kitchen' && activeDoorRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setStudyroomPosition([10, 0, -10])
      setExistReturnLeft(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistStudyroom(true)
      setKitchentoStudyroom(true)
    }

    // Kitchen >>> Start
    if (currentRoom === 'Kitchen' && activeReturnLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setStartPosition([-10, 0, 10])
      setStartFurniturePosition([0, 10, 0])
      setLeftDoorPosition([-1, 1.42, -1])
      setRightDoorPosition([1, 1.42, -1])
      setDoorScale([0.1, 1.83, 1.3])
      setExistReturnLeft(false)
      setExistDoorLeft(false)
      setExistDoorRight(false)
      setExistStart(true)
      setKitchentoStart(true)
    }

    /**
     * BATHROOM
     */
    // Bathroom >>> LivingRoom
    if (currentRoom === 'Bathroom' && activeReturnLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setLivingroomPosition([-10, 0, 10])
      setLeftDoorPosition([-1, 1.15, -1])
      setRightDoorPosition([1, 1.15, -1])
      setDoorScale([0.1, 1.9, 1.3])
      setExistReturnLeft(false)
      setExistReturnRight(false)
      setExistLivingroom(true)
      setBathroomToLivingroom(true)
    }

    // Bathroom >>> Kitchen
    if (currentRoom === 'Bathroom' && activeReturnRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setKitchenPosition([10, 0, 10])
      setLeftDoorPosition([-1, 1.15, -0.95])
      setRightDoorPosition([1, 1.15, -0.95])
      setDoorScale([0.1, 1.9, 0.9])
      setExistReturnLeft(false)
      setExistReturnRight(false)
      setExistKitchen(true)
      setBathroomToKitchen(true)
    }   
    
    /**
     * BEDROOM
     */
    // BedRoom >>> LivingRoom
    if (currentRoom === 'Bedroom' && activeReturnRight) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setLivingroomPosition([10, 0, 10])
      setLeftDoorPosition([-1, 1.15, -1])
      setRightDoorPosition([1, 1.15, -1])
      setDoorScale([0.1, 1.9, 1.3])
      setExistReturnRight(false)
      setExistLivingroom(true)
      setBedroomToLivingroom(true)
    }

    /**
     *  STUDYROOM
     */
    // StudyRoom >>> Kitchen
    if (currentRoom === 'Studyroom' && activeReturnLeft) {
      setStartOpenLeftDoor(false)
      setStartOpenRightDoor(false)
      setLivingroomOpenLeftDoor(false)
      setLivingroomOpenRightDoor(false)
      setDoorLeftHovered(false)
      setDoorRightHovered(false)
      setKitchenPosition([-10, 0, 10])
      setLeftDoorPosition([-1, 1.15, -0.95])
      setRightDoorPosition([1, 1.15, -0.95])
      setDoorScale([0.1, 1.9, 0.9])
      setExistReturnLeft(false)
      setExistKitchen(true)
      setStudyroomToKitchen(true)
    }
  })

return <>
  {/* Left Door */}
  {existDoorLeft && (
    <DoorLeft
      onActiveDoorLeftChange={(value) => setActiveDoorLeft(value)}
      onDoorLeftHoverChange={handleDoorLeftHoverChange}
      position = { leftDoorPosition }
      scale = { doorScale }
    />
  )}
  {/* Right Door */}
  {existDoorRight && (
    <DoorRight
      onActiveDoorRightChange={(value) => setActiveDoorRight(value)}
      onDoorRightHoverChange={handleDoorRightHoverChange}
      position = { rightDoorPosition }
      scale = { doorScale }      
    />
  )}
  {/* Return Button Left */}
  {existReturnLeft && (
    <ReturnLeft
      onActiveReturnLeftChange={(value) => setActiveReturnLeft(value)}
    />
  )}
  {/* Return Button Right */}
  {existReturnRight && (
    <ReturnRight
      onActiveReturnRightChange={(value) => setActiveReturnRight(value)}
    />
  )}

  {/* 
  ** ROOMS 
  */}
  {existStart && (
    <>
      <group ref = { roomStart }>
        <RoomStart
          position = { startPosition }
          ref = { start }
        />
        <RoomStartLeftWall
          position = { startFurniturePosition }
          ref = { startLeftWall }
        />
        <RoomStartRightWall
          position = { startFurniturePosition }
          ref = { startRightWall }
        />
        <RoomStartLeftDoor
          position = { startFurniturePosition }
          ref = { startLeftDoor }
          onStartLeftDoorHoverChange={handleStartLeftDoorHoverChange}
        />
        <RoomStartRightDoor
          position = { startFurniturePosition }
          ref = { startRightDoor }
          onStartRightDoorHoverChange={handleStartRightDoorHoverChange}
        />
        <RoomStartDeck
          position = { startFurniturePosition }
          ref = { startDeck }
        />
        <RoomStartRock
          position = { startFurniturePosition }
          ref = { startRock }
        />
        <RoomStartFox
          position = { startFurniturePosition }
          ref = { startFox }
        />
      </group>
    </>
  )}

  {/* Kitchen */}
  {existKitchen && (
    <>
      <group ref = { roomKitchen }>
        <RoomKitchen
          position = { kitchenPosition }
          ref = { kitchen }
        />
        <RoomKitchenLeftWall
          position = { [ 0, 10, 0 ] }
          ref = { kitchenLeftWall }
        />
        <RoomKitchenRightWall
          position = { [ 0, 10, 0 ] }
          ref = { kitchenRightWall }
        />
        <RoomKitchenFridge
          position = { [ 0, 10, 0 ] }
          ref = { kitchenFridge }
        />
        <RoomKitchenFurniture
          position = { [ 0, 10, 0 ] }
          ref = { kitchenFurniture }
        />                                
      </group>
    </>
  )}

  {/* Bathroom */}
  {existBathroom && (
    <>
      <group ref = { roomBathroom }>
        <RoomBathroom
          position = { bathroomPosition }
          ref = { bathroom }
        />
        <RoomBathroomLeftWall
          position = { [ 0, 10, 0 ] }
          ref = { bathroomLeftWall }
        />
        <RoomBathroomRightWall
          position = { [ 0, 10, 0 ] }
          ref = { bathroomRightWall }
        />
        <RoomBathroomBathtub
          position = { [ 0, 10, 0 ] }
          ref = { bathroomBathtub }
        />
        <RoomBathroomWater
          position = { [ -0.33, 10, -0.87 ] }
          ref = { bathroomWater }
        />
        <RoomBathroomRug
          position = { [ 0, 10, 0 ] }
          ref = { bathroomRug }
        />
        <RoomBathroomStool
          position = { [ 0, 10, 0 ] }
          ref = { bathroomStool }
        />
        <RoomBathroomToilet
          position = { [ 0, 10, 0 ] }
          ref = { bathroomToilet }
        />                                                
      </group>
    </>
  )}

  {/* Studyroom */}
  {existStudyroom && (
    <>
      <group ref = { roomStudyroom }>
        <RoomStudyroom
          position = { studyroomPosition }
          ref = { studyroom }
        />
        <RoomStudyroomChair
          position = { [ 0, 10, 0 ] }
          ref = { studyroomChair }
        />
        <RoomStudyroomDesk
          position = { [ 0, 10, 0 ] }
          ref = { studyroomDesk }
        />
        <RoomStudyroomLeftWall
          position = { [ 0, 10, 0 ] }
          ref = { studyroomLeftWall }
        />
        <RoomStudyroomRightWall
          position = { [ 0, 10, 0 ] }
          ref = { studyroomRightWall }
        />
        <RoomStudyroomRadio
          position = { [ 0, 10, 0 ] }
          ref = { studyroomRadio }
        />
        <RoomStudyroomSpeaker
          position = { [ 0, 10, 0 ] }
          ref = { studyroomSpeaker }
        />                                                
      </group>
    </>
  )}

  {/* Livingroom */}
  {existLivingroom && (
    <>
      <group ref = { roomLivingroom }>
        <RoomLivingroom 
          position = { livingroomPosition }
          ref = { livingroom }
        />
        <RoomLivingroomLeftWall 
          position = { [ 0, 10, 0 ] }
          ref = { livingroomLeftWall }
        />
        <RoomLivingroomRightWall 
          position = { [ 0, 10, 0 ] }
          ref = { livingroomRightWall }
        />
        <RoomLivingroomLeftDoor
          position = { [ 0, 10, 0 ] }
          ref = { livingroomLeftDoor}
          onLivingroomLeftDoorHoverChange={handleLivingroomLeftDoorHoverChange}
        />
        <RoomLivingroomRightDoor
          position = { [ 0, 10, 0 ] }
          ref = { livingroomRightDoor }
          onLivingroomRightDoorHoverChange={handleLivingroomRightDoorHoverChange}
        />
        <RoomLivingroomPillow
          position = { [ 0, 10, 0 ] }
          ref = { livingroomPillow }
        />
        <RoomLivingroomPillow1
          position = { [ 0, 10, 0 ] }
          ref = { livingroomPillow1 }
        />
        <RoomLivingroomPillow2
          position = { [ 0, 10, 0 ] }
          ref = { livingroomPillow2 }
        />
        <RoomLivingroomPillow3
          position = { [ 0, 10, 0 ] }
          ref = { livingroomPillow3 }
        />
        <RoomLivingroomBonzai
          position = { [ 0, 10, 0 ] }
          ref = { livingroomBonzai }
        />
        <RoomLivingroomKotatsu
          position = { [ 0, 10, 0 ] }
          ref = { livingroomKotatsu }
        />
      </group>
    </>
  )}

  {/* Bedroom */}
  {existBedroom && (
    <>
      <group ref = { roomBedroom }>
        <RoomBedroom
          position = { bedroomPosition }
          ref = { bedroom }
        />
        <RoomBedroomBed
          position = { [ 0, 10, 0 ] }
          ref = { bedroomBed }
        />
        <RoomBedroomCatBed
          position = { [ 0, 10, 0 ] }
          ref = { bedroomCatBed }
        />
        <RoomBedroomDaruma
          position = { [ 0, 10, 0 ] }
          ref = { bedroomDaruma }
        />
        <RoomBedroomLeftWall
          position = { [ 0, 10, 0 ] }
          ref = { bedroomLeftWall }
        />
        <RoomBedroomRightWall
          position = { [ 0, 10, 0 ] }
          ref = { bedroomRightWall }
        />
        <RoomBedroomShelf
          position = { [ 0, 10, 0 ] }
          ref = { bedroomShelf }
        />                                
      </group>
    </>
  )}
</>
}