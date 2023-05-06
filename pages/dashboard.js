import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.wholedashboardpage}>
        <div className={styles.leftside}>
          <div className={styles.navigation}>
            <div className={styles.leftSide} />
            <div className={styles.board}>Board.</div>
            <div className={styles.dashboardlinks}>
              <div className={styles.linkFive}>
                <img
                  className={styles.settingIcon}
                  alt=""
                  src="/setting-icon.svg"
                />
                <div className={styles.settings}>Settings</div>
              </div>
              <div className={styles.linkFour}>
                <img className={styles.userIcon} alt="" src="/user-icon.svg" />
                <div className={styles.users}>Users</div>
              </div>
              <div className={styles.linkThree}>
                <img
                  className={styles.scheduleIcon}
                  alt=""
                  src="/schedule-icon.svg"
                />
                <div className={styles.schedules}>Schedules</div>
              </div>
              <div className={styles.linkTwo}>
                <img
                  className={styles.transactionIcon}
                  alt=""
                  src="/transaction-icon.svg"
                />
                <div className={styles.transactions}>Transactions</div>
              </div>
              <div className={styles.linkOne}>
                <b className={styles.dashboard1}>Dashboard</b>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard-icon.svg"
                />
              </div>
            </div>
            <p className={styles.help}>Help</p>
            <p className={styles.contactUs}>Contact Us</p>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.header}>
            <div className={styles.dashboard2} id="Header-flex-start">
              Dashboard
            </div>
            <div className={styles.last} id="Header-flex-end">
              <input className={styles.Search} placeholder="search..." />
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
            </div>
          </div>
          <div className={styles.totaloverall}>
            <div
              className={styles.totalRevenues}
              style={{ backgroundColor: "#DDEFE0", borderRadius: "20px" }}
            >
              <div className={styles.card} id="FormContainer" />
              <div className={styles.totalRevenues1}>Total Revenues</div>
              <b className={styles.b3}>$2,129,430</b>
              <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
            </div>
            <div
              className={styles.totalTransactions}
              style={{ backgroundColor: "#F4ECDD", borderRadius: "20px" }}
            >
              <div className={styles.card} id="FormContainer" />
              <div className={styles.totalTransactions1}>
                Total Transactions
              </div>
              <b className={styles.b2}>1,520</b>
              <img
                className={styles.totalTransactionsIcon}
                alt=""
                src="/total-transactions-icon.svg"
              />
            </div>
            <div
              className={styles.totalLikes}
              style={{ backgroundColor: "#EFDADA", borderRadius: "20px" }}
            >
              <div className={styles.card} id="FormContainer" />
              <div className={styles.totalLikes1}>Total Likes</div>
              <b className={styles.b}>9,721</b>
              <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
            </div>
            <div
              className={styles.totalUsers}
              style={{ backgroundColor: "#DEE0EF", borderRadius: "20px" }}
            >
              <div className={styles.card} id="FormContainer" />
              <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
              <div className={styles.totalUsers1}>Total Users</div>
              <b className={styles.b1}>892</b>
            </div>
          </div>
          <div className={styles.activitiesCard}>
            <div className={styles.card} id="FormContainer" />
            <div className={styles.guest}>Guest</div>
            <div className={styles.user}>User</div>
            <b className={styles.activities}>Activities</b>
            <div className={styles.mayJune2021Parent}>
              <div className={styles.mayJune1}>May - June 2021</div>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            </div>
            <div className={styles.chart}>
              <div className={styles.parent}>
                <div className={styles.div8}>500</div>
                <div className={styles.groupInner} />
              </div>
              <div className={styles.group}>
                <div className={styles.div8}>300</div>
                <div className={styles.groupInner} />
              </div>
              <div className={styles.container}>
                <div className={styles.div8}>400</div>
                <div className={styles.groupInner} />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.div8}>200</div>
                <div className={styles.groupInner} />
              </div>
              <div className={styles.parent1}>
                <div className={styles.div8}>100</div>
                <div className={styles.groupInner} />
              </div>
              <div className={styles.parent2}>
                <div className={styles.div13}>0</div>
                <div className={styles.groupChild4} />
              </div>
            </div>
            <img
              className={styles.activitiesCardChild}
              alt=""
              src="/ellipse-3.svg"
            />
            <img
              className={styles.activitiesCardItem}
              alt=""
              src="/ellipse-4.svg"
            />
            <img
              className={styles.lineChart1Icon}
              alt=""
              src="/line-chart-1.svg"
            />
            <img
              className={styles.lineChart2Icon}
              alt=""
              src="/line-chart-2.svg"
            />
            <div className={styles.chartWeeks}>
              <div className={styles.week1}>Week 1</div>
              <div className={styles.week2}>Week 2</div>
              <div className={styles.week3}>Week 3</div>
              <div className={styles.week4}>Week 4</div>
            </div>
          </div>
          <div className={styles.twocards}>
            <div className={styles.topProductsCard} id="TopProductCard">
              <div className={styles.card} id="FormContainer" />
              <div className={styles.div2}>
                <img className={styles.child} alt="" src="/ellipse-6.svg" />
                <b className={styles.basicTees}>Basic Tees</b>
                <div className={styles.div3}>55%</div>
              </div>
              <div className={styles.mayJune2021Wrapper}>
                <div className={styles.mayJune}>May - June 2021</div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.div4}>
                <img className={styles.child} alt="" src="/ellipse-61.svg" />
                <b className={styles.basicTees}>Custom Short Pants</b>
                <div className={styles.div3}>31%</div>
              </div>
              <div className={styles.div6}>
                <img className={styles.child} alt="" src="/ellipse-62.svg" />
                <b className={styles.basicTees}>Super Hoodies</b>
                <div className={styles.div3}>14%</div>
              </div>
              <b className={styles.topProducts}>Top products</b>
              <img
                className={styles.pieChartIcon}
                alt=""
                src="/pie-chart.svg"
              />
            </div>
            <div className={styles.schedulesCard} id="ScheduleCard">
              <div className={styles.card} id="FormContainer" />
              <b className={styles.todaysSchedule}>Today’s schedule</b>
              <div className={styles.meetingWithSuppliersFromKuParent}>
                <b className={styles.meetingWithSuppliers}>
                  Meeting with suppliers from Kuta Bali
                </b>
                <div className={styles.div}>14.00-15.00</div>
                <div
                  className={styles.atSunsetRoad}
                >{`at Sunset Road, Kuta, Bali `}</div>
                <div className={styles.groupChild} />
              </div>
              <div className={styles.seeAll}>See All</div>
              <input className={styles.vector} type="text" />
              <div className={styles.checkOperationAtGigaFactorParent}>
                <b className={styles.meetingWithSuppliers}>
                  Check operation at Giga Factory 1
                </b>
                <div className={styles.div}>18.00-20.00</div>
                <div
                  className={styles.atSunsetRoad}
                >{`at Central Jakarta `}</div>
                <div className={styles.groupItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
