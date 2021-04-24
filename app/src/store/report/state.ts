export interface ReportStateInterface {
  tablesState: Record<string, Record<string,boolean>>
}

function state(): ReportStateInterface {
  return {
    tablesState: {
      meta: {
        error: false,
        done: false
      },
      comment: {
        error: false,
        done: false
      },
      progress_exam: {
        error: false,
        done: false
      },
      progress: {
        error: false,
        done: false
      },
      creation: {
        error: false,
        done: false
      },
      proective: {
        error: false,
        done: false
      },
      class_rooms: {
        error: false,
        done: false
      },
      complex: {
        error: false,
        done: false
      },
      education: {
        error: false,
        done: false
      },
      programs: {
        error: false,
        done: false
      },
      reconstruction: {
        error: false,
        done: false
      },
      sdo: {
        error: false,
        done: false
      },
      teachingaids: {
        error: false,
        done: false
      },
      working_program: {
        error: false,
        done: false
      },
      circle: {
        error: false,
        done: false
      },
      events: {
        error: false,
        done: false
      },
      institutions: {
        error: false,
        done: false
      },
      plan: {
        error: false,
        done: false
      },
      activity: {
        error: false,
        done: false
      },
      coolhours: {
        error: false,
        done: false
      },
      obz: {
        error: false,
        done: false
      },
      plan_group: {
        error: false,
        done: false
      },
      content: {
        error: false,
        done: false
      },
      participation: {
        error: false,
        done: false
      },
      qualification: {
        error: false,
        done: false
      },
      selfeducation: {
        error: false,
        done: false
      },
      seminars: {
        error: false,
        done: false
      },
      technologies: {
        error: false,
        done: false
      },
      experience: {
        error: false,
        done: false
      },
      interaction: {
        error: false,
        done: false
      },
      subject: {
        error: false,
        done: false
      },
      manual: {
        error: false,
        done: false
      }
    }
  }
}

export default state;
