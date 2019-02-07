if (FSM!=fsm_reflex or res==FSM_FINISHED):
                    name1, color1 = NextAuto(CurrPoint)    # определяет следующий автомат и цвет ориентира, который нужно обходить
                    name2, color2 = NextAuto(CurrPoint+1)  # определяет еще один ориентир (второй)
                    ObjX = FindObj(color1, pointlist)      # ищет ориентир указанного цвета среди видимых ориентиров
                    ObjY = FindObj(color2, pointlist)      # ищет следующий ориентир указанного цвета среди видимых ориентиров
                    if(JobREGIM==DEBUG): 
                        print "pointlist = ", pointlist, " name1 = ", name1, " color1 = ", color1
                        print "name2 = ", name2, "color2 = ", color2
                        print GlobalTimer, " NextAuto 1 = ", name1, "CurrPoint = ", CurrPoint, " ObjX = ", ObjX, " ObjY = ", ObjY

                    if (color1 != ObjColor):
                        if (ObjY[0]>0):  # если видит второй ориентир, то к первому можно не ходить 
                            CurrPoint +=1
                            name1, color1 = name2, color2
                            ObjX = ObjY
                    
                        if(ObjX[0]>0):  # вижу ориентир нужного цвета по направлению ObjX[0]
                            if(JobREGIM==DEBUG): print GlobalTimer, " вижу ориентир нужного цвета"
                            FSM = setFSM(name1)  # выбрали следующий автомат или тот же самый
                            if (prevAuto <> FSM or prevObj <> color1): 
                                prevAuto = FSM 
                                prevObj = color1
                                FSM.reset()  # reset, если выбрали другой автомат
                    else: 
                        if(JobREGIM==DEBUG): print GlobalTimer, "Не вижу нужного ориентира цвета ", color1
                        nextpoint = FindNextStep(CurrPoint, pointlist) # пытаемся найти следующую точку в пути среди тех, что видим
                        if(JobREGIM==DEBUG): print "nextpoint = ", nextpoint
                        if(nextpoint>0): 
                            CurrPoint = nextpoint
                            if(JobREGIM==DEBUG): print "CurrPoint = ", CurrPoint
                            name1, color1 = NextAuto(CurrPoint)    # определяет следующий автомат и цвет ориентира, который нужно обходить
                            ObjX = FindObj(color1, pointlist)      # ищет ориентир указанного цвета среди видимых ориентиров
                            FSM = setFSM(name1)  # выбрали следующий автомат
                            if(JobREGIM==DEBUG): print " следующий автомат = ", name1
                            FSM.reset()  # reset, если выбрали другой автомат
                        else: 
                            prevAuto = FSM 
                            turn = DirNextPoint(CurrPoint, ObjX)
                            if (turn == LEFT): FSM = fsm_aroundl
                            else: FSM = fsm_aroundr
                            if (prevAuto <> FSM): 
                                FSM.reset()  # reset, если выбрали другой автомат